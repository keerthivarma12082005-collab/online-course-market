const registerBtn =
document.getElementById("registerBtn");

registerBtn.addEventListener("click",function(){

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    let message =
    document.getElementById("message");

    if(
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ){
        message.innerText =
        "Please fill all fields";

        message.style.color = "red";
        return;
    }

    if(password.length < 6){

        message.innerText =
        "Password must be at least 6 characters";

        message.style.color = "red";
        return;
    }

    if(password !== confirmPassword){

        message.innerText =
        "Passwords do not match";

        message.style.color = "red";
        return;
    }

    localStorage.setItem("userName",name);
    localStorage.setItem("userEmail",email);
    localStorage.setItem("userPassword",password);

    message.innerText =
    "Registration Successful!";

    message.style.color = "green";

    setTimeout(()=>{

        window.location.href =
        "login.html";

    },1500);

});