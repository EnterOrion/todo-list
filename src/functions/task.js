const taskForm = document.getElementById("taskInfo");





const todoTask = (name, details, date, project, concern) => { 
    return {title: name,
        description: details,
        dueDate : date,
        projectName: project,
        priority: concern
    }
}

function openTaskForm() {
    document.getElementById("taskForm").style.display = "block";
  }
function closeTaskForm() {
    document.getElementById("taskForm").style.display = "none";
}

function clearTaskForm() {
    const title = taskForm.elements["title"];
    const description = taskForm.elements["description"];
    const dueDate = taskForm.elements["dueDate"];
    const projectCategory = taskForm.elements["projectCategory"];
    const priority = taskForm.elements["priority"];
    title.value = "";
    description.value = "";
    dueDate.value = "";
    projectCategory.value = "None";
    priority.value = "Low";
}

const taskUI = function(taskAmount) {
    const taskDIV = document.createElement("div");
    const inboxContainer = document.getElementById("inbox");
    taskDIV.setAttribute("id", "task-div");

    if (inboxContainer.querySelector('#task-div') === null) {
        inboxContainer.appendChild(taskDIV);
    }


    const taskBoxDIV = document.createElement("div");
    taskBoxDIV.setAttribute("class", "task-box");
    for (let i = 0; i<taskAmount; i++) {
        taskDIV.appendChild(taskBoxDIV.cloneNode(true));
    }
   
}

export {openTaskForm, closeTaskForm, todoTask, clearTaskForm, taskUI};