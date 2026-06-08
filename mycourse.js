document
.getElementById("dashboardBtn")
.addEventListener("click",()=>{

window.location.href =
"dashboard.html";

});

let continueBtns =
document.querySelectorAll(".continueBtn");

continueBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(
"Opening Course Content..."
);

});

});

let certificateBtns =
document.querySelectorAll(".certificateBtn");

certificateBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(
"Certificate Download Started"
);

});

});