import homePage from "./functions/home"
import todayPage from "./functions/today"
import { projPage,  openProjForm, closeProjForm, createProject, clearProjForm} from "./functions/projManager"
import {closeTaskForm, openTaskForm, todoTask, clearTaskForm, taskUI} from "./functions/task"

let taskArray = [];
let projectArray = [];
const taskForm = document.getElementById("taskInfo");
const projectForm = document.getElementById("projectInfo")




const startUp = function() {
    const todayNav = document.getElementById("today");
    todayNav.addEventListener("click", todayPage);

    const homeNav = document.getElementById("home");
    homeNav.addEventListener("click", homePage);

    const projNav = document.getElementById("projects");
    projNav.addEventListener("click", projPage);

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
    const taskDisplay = document.getElementById("inbox");
    taskDisplay.innerHTML = "";
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

        taskUI(y.length);
        let elements = document.getElementById('task-div').children;
        elements.item(i).innerHTML +=  `
            <button id="close-task">Delete</button>
            <p><strong>Task title:</strong> ${taskTitle}</p>
            <p><strong>Details:</strong> ${taskDetails}</p>
            <p><strong>Due date:</strong> ${taskDate}</p>
            <p><strong>Project:</strong> ${taskProject}</p>
            <p><strong>Priority</strong> <div id=${taskPriority}>${taskPriority}</div></p>
        `
    }

}

const projectDisplay = function() {
    closeProjForm();
    let x = [];
    const projectDisplay = document.getElementById("projectCategory");
    for (let i = 0; i<projectArray.length; i++){
        x.push(projectArray[i])
    }
    let selectLength = projectDisplay.length - 1;
        for (let i = selectLength; i > 0; i--) {
            projectDisplay.remove(i);
    }
    let newX = JSON.stringify(x);
    localStorage.setItem("projects", newX);
    let y = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i<y.length; i++) {
        
        let projectTitle = y[i]["projectName"];
        let projectOption = document.createElement("option");
        projectOption.text = projectTitle;
        projectDisplay.add(projectOption);
    }

}

startUp();
taskLoad();
projectLoad();