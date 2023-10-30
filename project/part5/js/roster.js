
const getPlayers = async ()=>{
  const url = "roster.json";
  try {
   const response = await fetch(url);
    return await response.json();
}catch (error) {
    console.log(error);
}

}

const showPlayer = async ()=>{

  let players = await getPlayers();
  let playerSection = document.getElementById("playerList");

  //
 players.forEach((player)=>{
  
  playerSection.append(getPlayerItem(player));
  });

}

  const getPlayerItem = (player)=> {
    const playerSection = document.createElement("section");
    playerSection.classList.add("player");

    const pic = document.createElement("img");
    pic.src = this.pic;
    playerSection.appendChild(pic);

    const pname = document.createElement("p");
    pname.innerText = this.name;
    playerSection.appendChild(pname);

    const year = document.createElement("p");
    year.innerText = `class of ${this.year}`;
    playerSection.appendChild(year);

    const position = document.createElement("p");
    position.innerText = this.position;
    playerSection.appendChild(position);

    const number = document.createElement("p");
    number.innerText = '#' + this.number;
    playerSection.appendChild(number);

    return playerSection;
  }


window.onload = () => showPlayer();
