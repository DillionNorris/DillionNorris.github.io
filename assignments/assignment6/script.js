

// the html inserted into the index for exersize 1 and 2:
var ex1 ='<section id="e1"><h1>whos the Oldest</h1><p><label for="name1">Name 1:</label><input id="name1" type="text" /><label for="age1">Age 1:</label><input id="age1" type="text" /><label for="name2">Name 2:</label><input id="name2" type="text" /><label for="age2">Age 2:</label><input id="age2" type="text" /><label for="name3">Name 3:</label><input id="name3" type="text" /><label for="age3">Age 3:</label><input id="age3" type="text" /><button id="button1">Calculate age</button><p id="out">names:</p></p></section>';
const ex2 =' <Section id="e2"><h1>Fund Raising</h1><h2>Goal: 10,000.00</h2><label for="goal">Funds Raised: </label><input id ="goal" type="text"><button id="getGoal" >Display</button><div id = "meter"></div></Section>';
// see refrense.js for formated html

//--------------------

//shows example 1
const showEx1 = () => {
  const e1 = document.getElementById("text");
  const items = ex1;
  e1.innerHTML = items;
  document.getElementById("button1").onclick = calcAge;
};

//calculates ages from youngest to oldest
// affiliated with example 1
const calcAge = () => {
  const name1 = document.getElementById("name1").value;
  const age1 = document.getElementById("age1").value;

  const name2 = document.getElementById("name2").value;
  const age2 = document.getElementById("age2").value;

  const name3 = document.getElementById("name3").value;
  const age3 = document.getElementById("age3").value;

  const names = [name1, name2, name3];
  const ages = [age1, age2, age3];

  

  let temp;
  for (var j = 0; j < ages.length; j++) {
    console.log(j);
    for (let i = 0; i < ages.length; i++) {
      console.log(i);
      if (ages[i] < ages[i + 1]) {
        //sort age
        temp = ages[i + 1];
        ages[i + 1] = ages[i];
        ages[i] = temp;
        //sort name
        temp = names[i + 1];
        names[i + 1] = names[i];
        names[i] = temp;
      }
      if (ages[i] > ages[i + 1]) {
        temp = ages[i];
        ages[i] = ages[i + 1];
        ages[i + 1] = temp;

        //sort name
        temp = names[i];
        names[i] = names[i + 1];
        names[i + 1] = temp;
      }
    }
  }

  out = document.getElementById("out");
  out.innerHTML =
    "Names: " + names[0] + ", " + names[1] + ", " + names[2] + ". ";
    if(ages[0] != Number || ages[1] != Number ||ages[2] != Number  ){
out.innerHTML = " Invalid input";
    }
};

//--------------------

// shows example 2
const showEx2 = () => {
  const e2 = document.getElementById("text");
  e2.innerHTML = ex2;
  document.getElementById("getGoal").onclick = getGoal;
};
// updates goal meter with funds
const getGoal = () => {
  const goal = document.getElementById("goal").value;
  const meter = document.getElementById("meter");
 meter.classList.remove("meter0");
 meter.classList.remove("meter25");
 meter.classList.remove("meter50");
 meter.classList.remove("meter75");
 meter.classList.remove("meter100");
  

  if (0<=goal && goal<(0.25 * 10000)) {
    meter.classList.add("meter0");
  }
  if ((0.25 * 10000) <= goal && goal < (0.5 * 10000)) {
    meter.classList.add("meter25");
  }
  if ((0.5 * 10000) <= goal && goal < (0.75 * 10000)) {
    meter.classList.add("meter50");
  }
  if ((0.75 * 10000) <= goal && goal< 10000) {
    meter.classList.add("meter75");
  }
  if (goal == 10000 || goal > 10000) {
    meter.classList.add("meter100");
    
  }
};

//---------------------------------

//clears screen before switching tabs
const clear = () => {
  const screen = document.getElementById("text");
  screen.innerHTML = " ";
};

const burger = ()=>{
 const buttons = document.getElementById("buttons");

 if( buttons.style.display ==="none"){
    buttons.style.display = "block";
 }else{
    buttons.style.display="none";
 }
 

 

}

window.onload = () => {
  document.getElementById("e1-button").onclick = showEx1;
  document.getElementById("e2-button").onclick = showEx2;
  document.getElementById("burger").onclick = burger;
};
