
function validate(){
    var usernameForm = document.getElementById("username").value;
    var passwordForm = document.getElementById("password").value;
    let username = "admin";
    let password = "pass";

    if(usernameForm==username && passwordForm==password){
        alert("login Succesfully");
        window.open("resume.html");
    }

    else{
        alert("Wrong Username or password");
    }
}

let button = document.getElementById("login");
button.addEventListener('click', validate);
