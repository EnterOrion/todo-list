
const todoTask = (name, details, date, project, concern, additional, label) => { 
    return {title: name,
        description: details,
        dueDate : date,
        projectName: project,
        priority: concern,
        notes: additional,
        label: label
    }
}

function openTaskForm() {
    document.getElementById("taskForm").style.display = "block";
  }
function closeTaskForm() {
    document.getElementById("taskForm").style.display = "none";
}

export {openTaskForm, closeTaskForm};