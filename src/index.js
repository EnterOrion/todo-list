import homePage from "./functions/home"
import todayPage from "./functions/today"
import { projPage,  openProjForm, closeProjForm} from "./functions/projManager"
import {closeTaskForm, openTaskForm, todoTask, clearTaskForm} from "./functions/task"

let taskArray = [];
const taskForm = document.getElementById("taskInfo");




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
    cancelProjBtn.addEventListener("click", closeProjForm);

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

const taskDisplay = function() {
    console.log("success");
    closeTaskForm();
    let x = [];
    let z = [];
    const taskDisplay = document.getElementById("inbox");
    taskDisplay.innerHTML = "";
    console.log(taskArray);
    for (let i = 0; i<taskArray.length; i++){
        x.push(taskArray[i])
        
    }
    let newX = JSON.stringify(x);
    localStorage.setItem("tasks", newX);
    let y = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i<y.length; i++) {
        let taskTitle = y[i]["title"]
        taskDisplay.innerHTML += taskTitle + " ";
        
    }
}


startUp();
taskLoad();