


const displayRainbow =()=>{

    const num = 1   // number of milliseconds 
    //disp red
    setTimeout(red, num);
    //display orange
    setTimeout(orange, num);
    //display yellow
    setTimeout(yellow, num);
    //display green
    setTimeout(green, num);
    //display blue
    setTimeout(blue, num);
    //display purp
    setTimeout(purple, num);
    //display pot
    setTimeout(pot, num);
}

const red = ()=>{document.getElementById("red").style.visable;}
const orange = ()=>{document.getElementById("orange").style.visable;}
const yellow = ()=>{document.getElementById("yellow").style.visable;}
const green = ()=>{document.getElementById("green").style.visable;}
const blue = ()=>{document.getElementById("blue").style.visable;}
const purple = ()=>{document.getElementById("purple").style.visable;}
const pot = ()=>{document.getElementById("pot").style.visable;}
    

    




window.onload =()=>{
document.getElementById("rainbow-button").onclick = displayRainbow();
}