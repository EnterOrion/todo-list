const projectForm = document.getElementById("projectInfo")

function projPage() {
    const inbox = document.getElementById("inbox");
    inbox.innerHTML = " ";
    const inboxPara = document.createElement("p");
    inboxPara.innerText = "So many projects";
    inbox.appendChild(inboxPara);
}

const createProject = (name) => {
	return {
	projectName: name
}
}
function clearProjForm() {
    const title = projectForm.elements["titleProj"];
    title.value = "";
}

function openProjForm() {
    document.getElementById("projectForm").style.display = "block";
  }
function closeProjForm() {
    document.getElementById("projectForm").style.display = "none";
}

const projectUI = function(projectAmount) {
    const projectDIV = document.createElement("div");
    const inboxContainer = document.getElementById("inbox");
    projectDIV.setAttribute("id", "project-div");

    if (inboxContainer.querySelector('#project-div') === null) {
        inboxContainer.appendChild(projectDIV);
    }

    const projectBox = document.createElement("div");
    projectBox.setAttribute("class", "project-box");
    for (let i = 0; i<projectAmount; i++) {
        projectDIV.appendChild(projectBox.cloneNode(true));
    }
   
}


export {projPage, openProjForm, closeProjForm, createProject, clearProjForm, projectUI};