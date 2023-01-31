import homePage from "./functions/home"
import todayPage from "./functions/today"
import {projPage,  openProjForm, closeProjForm, createProject, clearProjForm, projectUI} from "./functions/projManager"
import {closeTaskForm, openTaskForm, todoTask, clearTaskForm, taskUI} from "./functions/task"
import {format} from "date-fns"

let taskArray = [];
let projectArray = [];
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

    homePage();
}

const taskLoad = function() {
    
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = taskForm.elements["title"];
        const description = taskForm.elements["description"];
        const dueDate = taskForm.elements["dueDate"];
        const projectCategory = taskForm.elements["projectCategory"];
        const priority = taskForm.elements["priority"];
        const newTask = todoTask(title.value, description.value, dueDate.value, projectCategory.value, priority.value)
        clearTaskForm();
        taskArray.push(newTask);
    }
      );
}

const projectLoad = function() {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = projectForm.elements["titleProj"];
        const newProject = createProject(title.value);
        clearProjForm();
        projectArray.push(newProject);
        }
    );
}

const taskDisplay = function() {
    closeTaskForm();
    let x = [];
    let inboxSelector = document.getElementById("inbox");
    let currentClass = inboxSelector.classList[0];

    const taskDisplay = document.getElementById("inbox");
    
    if (currentClass == "home") {
    taskDisplay.innerHTML = "";
    }
    for (let i = 0; i<taskArray.length; i++){
        x.push(taskArray[i])
        
    }
    let newX = JSON.stringify(x);
    localStorage.setItem("tasks", newX);
    let y = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i<y.length; i++) {
        let taskTitle = y[i]["title"];
        let taskDetails = y[i]["description"];
        let taskDate = y[i]["dueDate"];
        let taskProject = y[i]["projectName"];
        let taskPriority = y[i]["priority"];

        let taskDateFormatted = new Date(taskDate);
        const dateMonth = format(taskDateFormatted, 'MMM');
        const dateDay = format(taskDateFormatted, 'do');
        const dateYear = format(taskDateFormatted, 'yyyy');
        const dateText = `${dateMonth}. ${dateDay}, ${dateYear}`;


    if (currentClass == "home") {
        
        taskUI(y.length);
        let elements = document.getElementById('task-div').children;
        elements.item(i).innerHTML +=  `
            <button class="close-task">Delete</button>
            <p><strong>Task title:</strong> <span class="task-title">${taskTitle}</span></p>
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

const projectDisplay = function() {
    closeProjForm();
    let x = [];
    let inboxSelector = document.getElementById("inbox");
    let currentClass = inboxSelector.classList[0];

    const projectSelection = document.getElementById("projectCategory");
    const projectDisplay = document.getElementById("inbox");
    

    if (currentClass == "projects") {
        projectDisplay.innerHTML = "";
    }

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
        <p><strong>Project title:</strong> ${projectTitle}</p>
        `
    }
    }

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
    for (let i = 0; i<y.length; i++) {
        let taskDate = y[i]["dueDate"];
        if (taskDate == dateCurrentText){
        todayArray.push(y[i]);
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
            <p><strong>Task title:</strong> ${taskTitle}</p>
            <p><strong>Details:</strong> ${taskDetails}</p>
            <p><strong>Due date:</strong> <em>${dateText}</em></p>
            <p><strong>Project:</strong> ${taskProject}</p>
            <p><strong>Priority</strong> <div id=${taskPriority}>${taskPriority}</div></p>
        `
        
    }

}

const removeTask = function(taskSelector) {
    let x = [];
    let taskParagraph = taskSelector.parentElement.querySelector('.task-title');
    let taskRemoveTitle = taskParagraph.innerHTML;
    taskArray = JSON.parse(localStorage.getItem("tasks"));
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
taskLoad();
projectLoad();