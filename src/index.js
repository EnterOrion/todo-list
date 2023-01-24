import homePage from "./functions/home"
import todayPage from "./functions/today"
import { projPage,  openProjForm, closeProjForm} from "./functions/projManager"
import {closeTaskForm, openTaskForm} from "./functions/task"


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
    cancelBtn.addEventListener("click", closeTaskForm);

    const projectBtn = document.getElementById("newProject");
    projectBtn.addEventListener("click", openProjForm);

    const cancelProjBtn = document.getElementById("btn cancel proj");
    cancelProjBtn.addEventListener("click", closeProjForm);

    homePage();
}

startUp();