function todayPage() {
    const inbox = document.getElementById("inbox");
    inbox.innerHTML = " ";
    const inboxPara = document.createElement("p");
    inboxPara.innerText = "Today";
    inbox.appendChild(inboxPara);
}

export default todayPage;