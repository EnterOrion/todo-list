function homePage() {
    const inbox = document.getElementById("inbox");
    inbox.innerHTML = " ";
    const inboxPara = document.createElement("p");
    inboxPara.innerText = "Welcome to your to-do list! To get started, add a task or a project from the sidebar!";
    inbox.appendChild(inboxPara);
}

export default homePage;