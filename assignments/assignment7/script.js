


const runningMan =()=>{
    man = document.getElementById("man");
    for(let i = 25;i<50 ;i++){
        man.style.margin = i;
        
    }


}

 let funds = 0;
const fund =()=>{
    numFund = document.getElementById("goal");
    funds = numFunds + funds;
    meter = document.getElementById("meter");
    percent = (funds/10000)*100;

    meter.style.SVGLinearGradientElement



    
    
}


window.onload =()=>{
    document.getElementById("man").onclick = runningMan;
    document.getElementById("getGoal").onclick = fund;

}