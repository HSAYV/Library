let signupBtn=document.getElementById("signupbtn");
let signinBtn=document.getElementById("signinbtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");


signinBtn.onclick = function(){
    signinBtn.classList.remove("nameField");
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    signupBtn.classList.add("nameField");
    title.innerHTML="Sign-Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}