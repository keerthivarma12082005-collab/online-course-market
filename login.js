const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener("click",function(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let savedEmail =
    localStorage.getItem("userEmail");

    let savedPassword =
    localStorage.getItem("userPassword");

    let message =
    document.getElementById("message");

    if(
        email === savedEmail &&
        password === savedPassword
    ){

        message.innerText =
        "Login Successful";

        message.style.color =
        "green";

        setTimeout(()=>{

            window.location.href =
            "dashboard.html";

        },1000);

    }
    else{

        message.innerText =
        "Invalid Email or Password";

        message.style.color =
        "red";

    }

});