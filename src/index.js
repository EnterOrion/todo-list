import homePage from "./functions/home"
import todayPage from "./functions/today"
import {projPage,  openProjForm, closeProjForm, createProject, clearProjForm, projectUI} from "./functions/projManager"
import {closeTaskForm, openTaskForm, todoTask, clearTaskForm, taskUI} from "./functions/task"
import {format} from "date-fns"

//let taskArray = [];
//let projectArray = [];


const taskForm = document.getElementById("taskInfo");
const projectForm = document.getElementById("projectInfo")

const activePage = function(page) {
    let inboxSelector = document.getElementById("inbox");
    let currentClass = inboxSelector.classList[0];
    
    if (inboxSelector.classList.length == 1) {
        inboxSelector.classList.remove(currentClass);
    }

    inboxSelector.classList.add(page);
}



const startUp = function() {
    taskLoad();
    projectLoad();
    let y = JSON.parse(localStorage.getItem("tasks"));
    if (y != null) {
        taskDisplay();
    }
    else {
        homePage();
    }
    const todayNav = document.getElementById("today");
    todayNav.addEventListener("click", todayPageFull);

    const homeNav = document.getElementById("home");
    homeNav.addEventListener("click", homePageFull);

    const projNav = document.getElementById("projects");
    projNav.addEventListener("click", projPageFull);

    const taskNav = document.getElementById("newTask");
    taskNav.addEventListener("click", openTaskForm);

    const cancelBtn = document.getElementById("btn cancel");
    cancelBtn.addEventListener("click", taskDisplay);


    const projectBtn = document.getElementById("newProject");
    projectBtn.addEventListener("click", openProjForm);

    const cancelProjBtn = document.getElementById("btn cancel proj");
    cancelProjBtn.addEventListener("click", projectDisplay);

}

const taskLoad = function() {
    let x = [];
    let taskArray = [];
    if (JSON.parse(localStorage.getItem("tasks")) == null || JSON.parse(localStorage.getItem("tasks")).length == 0) {
        taskArray = [];
    }
    else {
        let y = JSON.parse(localStorage.getItem("tasks"));
        for (let i=0; i<y.length; i++) {
        taskArray.push(y[i]);
        }
    }
    let checker = "good";
    if (taskForm.classList.length == 2)
    { checker = "bad"}

if (checker == "good" ) {

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        taskForm.classList.add("event-added");
        const title = taskForm.elements["title"];
        let y = JSON.parse(localStorage.getItem("tasks"));
        let firstTitle = title.value;

        if (y != null) {
        for (let i = 0; i<y.length; i++) {
            let taskTitle = y[i]["title"];
            if (firstTitle == taskTitle) {
                document.getElementById("repeatTitle").style.display = "block";
                document.getElementById("repeat-understood").addEventListener('click', e=> {
                    document.getElementById("repeatTitle").style.display = "none";
                })
                return;
            }
        }
    }

        for (let i=0; i<x.length; i++) {
            let taskTitle = x[i]["title"];
            if (firstTitle == taskTitle) {
                document.getElementById("repeatTitle").style.display = "block";
                document.getElementById("repeat-understood").addEventListener('click', e=> {
                document.getElementById("repeatTitle").style.display = "none";
            })
            return;
        }
    }
        
        const description = taskForm.elements["description"];
        const dueDate = taskForm.elements["dueDate"];
        const projectCategory = taskForm.elements["projectCategory"];
        const priority = taskForm.elements["priority"];
        const newTask = todoTask(title.value, description.value, dueDate.value, projectCategory.value, priority.value)
        clearTaskForm();
        taskArray = [];
        y = JSON.parse(localStorage.getItem("tasks"));
        if (y != null) {
        for (let i=0; i<y.length; i++) {
            taskArray.push(y[i]);
        }
    }
        taskArray.push(newTask);
        let newTaskArray = JSON.stringify(taskArray);
        localStorage.setItem("tasks", newTaskArray);
        //x.push(newTask);    
       
    }
        );
}
    
    return taskArray;
}

const projectLoad = function() {
    let x = [];
    let projectArray = [];
    if (JSON.parse(localStorage.getItem("projects")) == null || JSON.parse(localStorage.getItem("projects")).length == 0) {
        projectArray = [];
    }
    else {
        let y = JSON.parse(localStorage.getItem("projects"));
        for (let i=0; i<y.length; i++) {
        projectArray.push(y[i]);
        }
    }
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = projectForm.elements["titleProj"];
        let y = JSON.parse(localStorage.getItem("projects"));
        let firstTitle = title.value;

        if (y != null) {
        for (let i = 0; i<y.length; i++) {
            let projectTitle = y[i]["projectName"];
            if (firstTitle == projectTitle) {
                document.getElementById("repeatProject").style.display = "block";
                document.getElementById("repeat-understood-proj").addEventListener('click', e=> {
                    document.getElementById("repeatProject").style.display = "none";
                })
                return;
            }
        }
    }

        for (let i=0; i<x.length; i++) {
            let projectTitle = x[i]["projectName"];
            if (firstTitle == projectTitle) {
                document.getElementById("repeatProject").style.display = "block";
                document.getElementById("repeat-understood-proj").addEventListener('click', e=> {
                    document.getElementById("repeatProject").style.display = "none";
                })
                return;
            }
        }

        const newProject = createProject(title.value);
        clearProjForm();
        projectArray = [];
        if (y != null) {
            for (let i=0; i<y.length; i++) {
                projectArray.push(y[i]);
                }
        }
        projectArray.push(newProject);
        x.push(newProject);
        let newProjectArray = JSON.stringify(projectArray);
        localStorage.setItem("projects", newProjectArray);
        }
    );
}

const taskDisplay = function() {
    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    closeTaskForm();

    let x = [];
    let inboxSelector = document.getElementById("inbox");
    let currentClass = inboxSelector.classList[0];

    const taskDisplay = document.getElementById("inbox");
    /*for (let i = 0; i<taskArray.length; i++){
        x.push(taskArray[i])
        
    }
    let newX = JSON.stringify(x);
    localStorage.setItem("tasks", newX);*/

    if (currentClass == "home") {
    taskDisplay.innerHTML = "";
    }
    else if (currentClass == "today") {
        todayDisplay();
    }
    
 
    //let y = JSON.parse(localStorage.getItem("tasks")); changed y to taskArray
    if (taskArray != null) {
    for (let i = 0; i<taskArray.length; i++) {
        let taskTitle = taskArray[i]["title"];
        let taskDetails = taskArray[i]["description"];
        let taskDate = taskArray[i]["dueDate"];
        let taskProject = taskArray[i]["projectName"];
        let taskPriority = taskArray[i]["priority"];

        let taskDateFormatted = new Date(taskDate);
        const dateMonth = format(taskDateFormatted, 'MMM');
        const dateDay = format(taskDateFormatted, 'do');
        const dateYear = format(taskDateFormatted, 'yyyy');
        const dateText = `${dateMonth}. ${dateDay}, ${dateYear}`;


    if (currentClass == "home") {
        
        taskUI(taskArray.length);
        let elements = document.getElementById('task-div').children;
        elements.item(i).innerHTML +=  `
            <button class="close-task">Delete</button>
            <strong><p><span class="task-title">${taskTitle}</span></p></strong>
            <p><strong>Details:</strong> ${taskDetails}</p>
            <p><strong>Due date:</strong> <em>${dateText}</em></p>
            <p><strong>Project:</strong> ${taskProject}</p>
            <p><strong>Priority</strong> <div id=${taskPriority}>${taskPriority}</div></p>
        `
        
    }
    
    }
    const deleteButton = document.getElementsByClassName("close-task");
    for (let i = 0; i<deleteButton.length; i++)
        deleteButton[i].addEventListener('click', e => {
        removeTask(deleteButton[i]);
    }
    )
}
    projectDisplay();

}

const projectDisplay = function() {
    let projectArray = JSON.parse(localStorage.getItem("projects"));
    closeProjForm();
    let x = [];
    let inboxSelector = document.getElementById("inbox");
    let currentClass = inboxSelector.classList[0];

    const projectSelection = document.getElementById("projectCategory");
    const projectDisplay = document.getElementById("inbox");
    

    if (currentClass == "projects") {
        projectDisplay.innerHTML = "";
    }

    if (projectArray != null) {
    for (let i = 0; i<projectArray.length; i++){
        x.push(projectArray[i])
    }

    let selectLength = projectSelection.length - 1;
        for (let i = selectLength; i > 0; i--) {
            projectSelection.remove(i);
    }
    let newX = JSON.stringify(x);
    localStorage.setItem("projects", newX);
    let y = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i<y.length; i++) {
        
        let projectTitle = y[i]["projectName"];
        let projectOption = document.createElement("option");
        projectOption.text = projectTitle;
        projectSelection.add(projectOption);

    if (currentClass == "projects") {
        projectUI(y.length);
        let elements = document.getElementById('project-div').children;
        elements.item(i).innerHTML +=  `
        <button class="close-project">Delete</button>
        <span class="task-number-proj"><strong>Number of tasks:</strong> ${projectTaskCounter(projectTitle)}</span>
        <button class="project-details">Details</button>
        <p><strong>Project title:</strong> <span class="project-title">${projectTitle}</span></p>
        `
    }
    }
    const deleteButton = document.getElementsByClassName("close-project");
    for (let i = 0; i<deleteButton.length; i++)
        deleteButton[i].addEventListener('click', e => {
        removeProject(deleteButton[i]);
    }
    )
}
    

    const detailButton = document.getElementsByClassName("project-details");
    for (let i = 0; i<detailButton.length; i++) 
        detailButton[i].addEventListener('click', e => {
            document.getElementById("project-tasks").style.display = "block";
            detailProject(detailButton[i]);
            document.getElementById("info-understood-proj").addEventListener('click', e=> {
                document.getElementById("project-tasks").style.display = "none";
            })
        }
        )

}

const todayDisplay = function() {
    let todayArray = [];
    const todayDisplay = document.getElementById("inbox");
    let currentClass = todayDisplay.classList[0];


    if (currentClass == "today") {
        todayDisplay.innerHTML = "";
    }
    let currentTime = new Date();
    const dateCurrentMonth = format(currentTime, 'MM');
    const dateCurrentDay = format(currentTime, 'dd');
    const dateCurrentYear = format(currentTime, 'yyyy');
    const dateCurrentText = `${dateCurrentYear}-${dateCurrentMonth}-${dateCurrentDay}`;
    
    let y = JSON.parse(localStorage.getItem("tasks"));
    if (y != null) {
    for (let i = 0; i<y.length; i++) {
        let taskDate = y[i]["dueDate"];
        if (taskDate == dateCurrentText){
        todayArray.push(y[i]);
        }
       
    }
}
    

    for (let j = 0; j<todayArray.length; j++) {
        let taskTitle = todayArray[j]["title"];
        let taskDetails = todayArray [j]["description"];
        let taskDate = todayArray[j]["dueDate"];
        let taskProject = todayArray[j]["projectName"];
        let taskPriority = todayArray[j]["priority"];
        
        let taskDateFormatted = new Date(taskDate);
        const dateMonth = format(taskDateFormatted, 'MMM');
        const dateDay = format(taskDateFormatted, 'do');
        const dateYear = format(taskDateFormatted, 'yyyy');
        const dateText = `${dateMonth}. ${dateDay}, ${dateYear}`;

        taskUI(todayArray.length);
        let elements = document.getElementById('task-div').children;
        elements.item(j).innerHTML +=  `
            <button class="close-task">Delete</button>
            <strong><p><span class="task-title">${taskTitle}</span></p></strong>
            <p><strong>Details:</strong> ${taskDetails}</p>
            <p><strong>Due date:</strong> <em>${dateText}</em></p>
            <p><strong>Project:</strong> ${taskProject}</p>
            <p><strong>Priority</strong> <div id=${taskPriority}>${taskPriority}</div></p>
        `
        
    }
    const deleteButton = document.getElementsByClassName("close-task");
    for (let i = 0; i<deleteButton.length; i++)
        deleteButton[i].addEventListener('click', e => {
        removeTodayTask(deleteButton[i]);
    }
    )

}

const removeTask = function(taskSelector) {
    let x = [];
    let taskArray = JSON.parse(localStorage.getItem("tasks"))
    let taskParagraph = taskSelector.parentElement.querySelector('.task-title');
    let taskRemoveTitle = taskParagraph.innerHTML;

    for (let i=0; i< taskArray.length; i++) {
        let taskTitle = taskArray[i]["title"];
        if (taskTitle == taskRemoveTitle) {
           x.push(taskArray.splice(i, 1));
        }
    }

    let tasks = JSON.stringify(taskArray);
    localStorage.setItem("tasks", tasks);
    taskDisplay();
}

const removeProject = function(projectSelector) {
    let x = [];
    let projectParagraph = projectSelector.parentElement.querySelector('.project-title');
    let projRemoveTitle = projectParagraph.innerHTML;
    let projectArray = JSON.parse(localStorage.getItem("projects"));
    for (let i=0; i<projectArray.length; i++) {
        let projectTitle = projectArray[i]["projectName"];
        if (projectTitle == projRemoveTitle) {
           x.push(projectArray.splice(i, 1));
        }
    }
    let projects = JSON.stringify(projectArray);
    localStorage.setItem("projects", projects);
    projectDisplay();
    removeProjLabel(projRemoveTitle);
}

const removeTodayTask = function(todaySelector) {
    let x = [];
    let todayParagraph = todaySelector.parentElement.querySelector('.task-title');
    let todayRemoveTitle = todayParagraph.innerHTML;
    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    for (let i=0; i< taskArray.length; i++) {
        let todayTitle = taskArray[i]["title"];
        if (todayTitle == todayRemoveTitle) {
           x.push(taskArray.splice(i, 1));
        }
    }
    let tasks = JSON.stringify(taskArray);
    localStorage.setItem("tasks", tasks);
    todayDisplay();
}


const removeProjLabel = function(removeLabel) {
    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    if (taskArray != null) {
    for (let i=0; i<taskArray.length; i++) {
        let oldProj = taskArray[i]["projectName"];
        if (oldProj == removeLabel) {
            taskArray[i]["projectName"] = "None";
        }
    }
}
    let tasks = JSON.stringify(taskArray);
    localStorage.setItem("tasks", tasks);
    taskDisplay();
}

const detailProject = function(projectSelector) {
    let x = [];
    let projectParagraph = projectSelector.parentElement.querySelector('.project-title');
    let projDetailTitle = projectParagraph.innerHTML;

    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    if (taskArray != null) {
    for (let i=0; i<taskArray.length; i++) {
        let taskFinder = taskArray[i]["projectName"];
        if (taskFinder == projDetailTitle) {
            x.push(taskArray[i]["title"]);
        }
    }
}

    document.getElementById("task-list").innerHTML = "";
    for (let i=0; i<x.length; i++) {

            document.getElementById("task-list").innerHTML += `
            <ul>
            <li>${x[i]}</li>
            </ul>`
    }

}

const projectTaskCounter = function(currentProject) {
    let taskNumber = 0;
    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    if (taskArray != null) {
    for (let i=0; i<taskArray.length; i++) {
        let projFinder = taskArray[i]["projectName"];
        if (projFinder == currentProject) {
           taskNumber++;
        }
    }
}
    return taskNumber;
}

const homePageFull = function() {
    activePage("home");
    homePage();
    taskDisplay();
   
}


const projPageFull = function () {
    activePage("projects");
    projPage();
    projectDisplay();
}

const todayPageFull = function() {
    activePage("today");
    todayPage();
    todayDisplay();
}

activePage("home");
startUp();
