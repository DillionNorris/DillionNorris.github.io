



let quotes = [
    "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way. -Charles Bukowski",
    "Find what you love and let it kill you. -Charles Bukowski",
    "Some people never go crazy. What truly horrible lives they must live.-Charles Bukowski",
    "Im just an alcoholic who became a writer so that I would be able to stay in bed until noon.-Charles Bukowski",
    "She knew what she wanted and it wasnt me. -Charles Bukowski",
    "I guess the only time most people think about injustice is when it happens to them.-Charles Bukowski",
];
let index = 0;

const red = ()=>{document.getElementById("red").style.visibility = "visible";}
const orange = ()=>{document.getElementById("orange").style.visibility = "visible";}
const yellow = ()=>{document.getElementById("yellow").style.visibility = "visible";}
const green = ()=>{document.getElementById("green").style.visibility = "visible";}
const blue = ()=>{document.getElementById("blue").style.visibility = "visible";}
const purple = ()=>{document.getElementById("purple").style.visibility = "visible";}
const pot = ()=>{document.getElementById("pot").style.visibility = "visible";}



const displayRainbow =()=>{

       // number of milliseconds 
    //disp red
  setInterval(red, 1000);
    
    //display orange
    setInterval(orange, 1500);
    //display yellow
    setInterval(yellow, 2000);
    console.log("1234321");
    //display green
    setInterval(green, 2500);
    //display blue
    setInterval(blue, 3000);
    //display purp
    setInterval(purple, 3500);
    //display pot
    setInterval(pot, 4000);
    
}

const displayQuotes = () => {

    let elemnt = document.getElementById("quote");
  if (index == 4){
   index = 0;
  }
  
  console.log("worked");
  
    elemnt.innerHTML =quotes[index];
  index = index+1;
  
  setTimeout(displayQuotes,2000);
  
};

//main



/*
while(true){
    setInterval(displayQuotes,2000);
}

*/



window.onload =()=>{
document.getElementById("rainbow-button").onclick = displayRainbow;
displayQuotes();
}