

const username = () =>{

    user = document.getElementById("user-input");
    pass = document.getElementById("pass-input");


// if user and pass works then 
    window.location.href='account-logged-in.html';

// else display status and Do not log in
document.getElementById("stat").style.visibility = "visible";

}

window.onload = ()=> {
    document.getElementById("stat").style.visibility = "hidden";
    document.getElementById("login").onclick = username;

}