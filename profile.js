let userName =
localStorage.getItem("userName");

let userEmail =
localStorage.getItem("userEmail");

if(userName){
document.getElementById(
"studentName"
).innerText = userName;
}

if(userEmail){
document.getElementById(
"studentEmail"
).innerText = userEmail;
}

document
.getElementById("editBtn")
.addEventListener("click",()=>{

let newName =
prompt("Enter New Name");

if(newName){

localStorage.setItem(
"userName",
newName
);

document.getElementById(
"studentName"
).innerText =
newName;

}

});

document
.getElementById("myCoursesBtn")
.addEventListener("click",()=>{

window.location.href =
"my-courses.html";

});

document
.getElementById("logoutBtn")
.addEventListener("click",()=>{

window.location.href =
"login.html";

});