let name =
localStorage.getItem("userName");

document.getElementById(
"studentName"
).innerText = name;

document
.getElementById("logoutBtn")
.addEventListener("click",()=>{

window.location.href =
"login.html";

});

document
.getElementById("coursesBtn")
.addEventListener("click",()=>{

window.location.href =
"courses.html";

});