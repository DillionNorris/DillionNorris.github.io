const img = document.getElementById("images/cockypillow.jpeg");
var id = null;

function show() {
  alert("woked-ish");
  img.style.visibility = "visable";
}
function hide() {
  alert("woked-ish");
  img.style.visibility = "hidden";
}

function showw() {
  alert("a");
}

const animate = ()=>{
  document.getElementById("square").classList.add("move");
}
const displayName = () =>{
const firstName = document.getElementById("txt-first-name").value;
alert(firstName);

}

window.onload = () =>{
document.getElementById("animate").onclick = animate;
document.getElementById("button-show-name").onclick = displayName;
}