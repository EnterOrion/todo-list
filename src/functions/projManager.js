function projPage() {
    const inbox = document.getElementById("inbox");
    inbox.innerHTML = " ";
    const inboxPara = document.createElement("p");
    inboxPara.innerText = "So many projects";
    inbox.appendChild(inboxPara);
}

export default projPage;