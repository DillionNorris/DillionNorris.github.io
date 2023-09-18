

function show() {
  document.getElementById("cocky").style.visibility = "visible";
}
function hide() {
  
  document.getElementById("cocky").style.visibility ="hidden";
}


const moveSquare = ()=>{
  document.getElementById("square").classList.add("move-square");
}
const stopSquare = () =>{
  document.getElementById("square").classList.remove("move-square");
}

const displayName = () =>{
const firstName = document.getElementById("txt-first-name").value;

console.log(firstName);
}

var count = 0;
const writeMessages = () =>{
  const prodName = document.getElementById("prod-name").value;
  const comment = document.getElementById("comment").value;
  const rating = document.getElementById("rating").value;
  const user = document.getElementById("user").value;
  const description = rating + "/5 stars. "+comment;
  count = count +1;
  if (count == 1){
    console.log("good-ish");
    const prod = document.getElementById("prod1");
    const desc = document.getElementById("desc1");
    const au = document.getElementById("au1");

    prod.innerHTML = prodName;
    desc.innerHTML = description;
    au.innerHTML = "by " +user;
    console.log(count);
  }
  if (count == 2){
    const prod = document.getElementById("prod2");
    const desc = document.getElementById("desc2");
    const au = document.getElementById("au2");

    prod.innerHTML = prodName;
    desc.innerHTML = description;
    au.innerHTML = "by " +user;
  }  
  if (count == 3){
    const prod = document.getElementById("prod3");
    const desc = document.getElementById("desc3");
    const au = document.getElementById("au3");

    prod.innerHTML = prodName;
    desc.innerHTML = description;
    au.innerHTML = "by " +user;
  }else{
    console.log("out of comments");
  }

}

window.onload = ()=>{
  document.getElementById("button-move").onclick=moveSquare;
  document.getElementById("stop").onclick=stopSquare;
  document.getElementById("button-comment").onclick = writeMessages;
}

