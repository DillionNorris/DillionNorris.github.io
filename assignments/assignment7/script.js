


const runningMan =()=>{
    man = document.getElementById("man");
    for(let i = 5;i<50 ;i++){
       setTimeout(setPos(i),5000);
       console.log(i);
   }
}

const setPos=(num)=>{
    man.style.setProperty("--x",num+"%")
}


    var funds = 0;
const fund =()=>{
    const numFund = document.getElementById("goal").value;
    funds = +numFund + +funds;
    let meter = document.getElementById("meter");
    const percent = (funds/10000)*100;
console.log(percent)
    meter.style.background = 'linear-gradient(0deg,rgb(255,0,0) '+percent+'%, rgb(255,255,255) 0%)';



    
    
}


window.onload =()=>{
    document.getElementById("man").onclick = runningMan;
    document.getElementById("getGoal").onclick = fund;

}