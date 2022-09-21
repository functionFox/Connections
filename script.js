console.log("page loaded...");

function editName() {
    var edit = document.querySelector(".card-body h1");
    edit.innerText = "Clara Oswald";
}

function acceptContact(num) {
    var contactNum = document.querySelector("#badge-2");
    contactNum.innerText++;
    closeContact(num);
}

function closeContact(num) {
    var requestNum = document.querySelector("#badge-1");
    requestNum.innerText--
    var toClose = document.querySelector("#contact-" + num);
    toClose.remove();
}