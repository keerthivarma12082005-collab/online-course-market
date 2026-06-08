document
.getElementById("placeOrderBtn")
.addEventListener("click",()=>{

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let address =
document.getElementById("address").value;

if(
name === "" ||
email === "" ||
phone === "" ||
address === ""
){

alert(
"Please fill all details"
);

return;

}

alert(
"Order Placed Successfully!"
);

window.location.href =
"my-courses.html";

});