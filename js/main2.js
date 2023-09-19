// sign in selector >>>
let emailInputLog = document.querySelector("#emailInputLog");
let passwordInputLog = document.querySelector("#passwordInputLog");
let alertMessageLog = document.querySelector("#alertMessageLog");
let logBtn = document.getElementById("logBtn");
let message = document.getElementById("message");
let userName = "";
if(userName == ""){
    userName = localStorage.getItem("name");
}
let usersData = [];
usersData = JSON.parse(localStorage.getItem("users"));

function welcomUser(){
    console.log(userName)
    if(userName == null){
        message.innerHTML = "";
    }else{

     message.innerHTML = `Welcome ${userName}`;
    }
}
function logOut(){
    localStorage.removeItem("name");
}
function isEmailExist() {
    for (let i = 0; i < usersData.length; i++) {
        if (emailInputLog.value === usersData[i].email ) {
            userName = usersData[i].name;
            localStorage.setItem("name",userName);
            return true;
        }
    }
    return false;
}
function isPassExist() {
    for (let i = 0; i < usersData.length; i++) {
        if (passwordInputLog.value === usersData[i].password) {
            return true;
        }
    }
    return false;
}
function searchFun() {
    if (emailInputLog.value === "" || passwordInputLog.value === "") {
    alertMessageLog.style.display = "block";
    alertMessageLog.innerHTML = "All inputs is required";
    }
    else {
    if (isPassExist() && isEmailExist()) {
        console.log(userName);
    logBtn.type = "submit";
    } 
    if (isEmailExist() && !isPassExist()) {
    alertMessageLog.style.display = "block";
    alertMessageLog.innerHTML = "Invalid Password";
    }
    if(!isEmailExist()){
    alertMessageLog.style.display = "block";
    alertMessageLog.innerHTML = "This Email Not Exist Go to Sign Up Page";
    }
    }
}


let nums = [ 50,60,70, 80, 90 ];
let newArr = [];
newArr = nums.map((element)=>{
    return element*5;
}) ;
let total = nums.reduce((sum, el)=>{
    return sum+=el;
})
console.log(nums.toString())
console.log(total)
console.log(nums);
console.log(newArr);