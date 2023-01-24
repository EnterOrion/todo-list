function homePage() {
    const inbox = document.getElementById("inbox");
    inbox.innerHTML = " ";
    const inboxPara = document.createElement("p");
    inboxPara.innerText = "Projects";
    inbox.appendChild(inboxPara);
}

export default homePage;