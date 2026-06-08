let removeButtons =
document.querySelectorAll(".removeBtn");

removeButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.parentElement.remove();

updateTotal();

});

});

function updateTotal(){

let cards =
document.querySelectorAll(".cart-card");

let total = 0;

cards.forEach(card=>{

let price =
card.querySelector("h4")
.innerText.replace("₹","");

total += Number(price);

});

document.getElementById(
"totalPrice"
).innerText =
"₹" + total;

}

document
.getElementById("checkoutBtn")
.addEventListener("click",()=>{

window.location.href =
"checkout.html";

});