document
.getElementById("sendBtn")
.addEventListener("click",()=>{

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message").value;

if(
name === "" ||
email === "" ||
message === ""
){

alert(
"Please fill all fields"
);

return;

}

alert(
"Message Sent Successfully!"
);

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";

});