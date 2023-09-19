

// sign up selectors
let nameInputSinup = document.getElementById("nameInput");
let emailInputSinup = document.querySelector("#emailInputSup");
let passwordInputSinup = document.querySelector("#passwordInputSup");
let alertMessageSignUP = document.getElementById("alertMessageSUP");
// let signupBtn = document.getElementById("signupBtn");

let usersData = []
if (localStorage.getItem("users") != null) {
    usersData = JSON.parse(localStorage.getItem("users"));
}

/*
Polyfill of String.prototype.endsWith in core-js
String.prototype.startsWith()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.lastIndexOf()

*/
function isEmailExist(user) {
    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].email === user.email) {
            return true;
        }
    }
    return false;
}

function isValidEmail(email) {
    return (email.includes("@") && email.endsWith(".com") && !email == "");
}
function isValidNamee(name) {
    return name !== ""  && isNaN(name[0]) ;
}
// function isValidPassword(password){
//     for(let i =0; i < password.length ;i++){

//     }
// }
function addUser() {
    let user = {
        name: nameInputSinup.value,
        email: emailInputSinup.value,
        password: passwordInputSinup.value
    }

    if(!isValidNamee(user.name))  {
        console.log(user.name)
        console.log(isValidNamee(user.name));
        alertMessageSignUP.style.display = "block";
        alertMessageSignUP.innerHTML = "Name must not be empty and must not start with a number";
    } else if (!isValidEmail(user.email)) {
        alertMessageSignUP.style.display = "block";
        alertMessageSignUP.innerHTML = "Email must not be empty and must be valid";
    } else if (user.password == "") {
        alertMessageSignUP.style.display = "block";
        alertMessageSignUP.innerHTML = "Password is required";
    } else {

        if (isEmailExist(user)) {
            console.log(isEmailExist(user))
            alertMessageSignUP.style.display = "block";
            alertMessageSignUP.innerHTML = "This email already exist";
        } else {
            alertMessageSignUP.style.display = "none";
            alertMessageSignUP.innerHTML = "";
            usersData.push(user);
            localStorage.setItem("users", JSON.stringify(usersData));
        }
    }
}






