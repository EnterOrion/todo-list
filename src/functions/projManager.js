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

function openProjForm() {
    document.getElementById("projectForm").style.display = "block";
  }
function closeProjForm() {
    document.getElementById("projectForm").style.display = "none";
}


export {projPage, openProjForm, closeProjForm};