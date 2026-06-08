let searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".course-card");

cards.forEach(card=>{

let title =
card.querySelector("h3")
.innerText.toLowerCase();

if(title.includes(filter)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

let detailButtons =
document.querySelectorAll(".detailsBtn");

detailButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

window.location.href =
"course-details.html";

});

});

let cartButtons =
document.querySelectorAll(".cartBtn");

cartButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Course Added To Cart");

});

});