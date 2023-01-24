
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

export {openTaskForm, closeTaskForm};