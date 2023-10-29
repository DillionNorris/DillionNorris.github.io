class player {
  constructor(name, year, position, number, pic) {
    this.name = name;
    this.year = year;
    this.position = position;
    this.number = number;
    this.pic = pic;
  }
  get item() {
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
}

window.onload = () => {

    let players = [];
    let playerList = document.getElementById("playerList");


                //name, year, position, number, pic
    players.push(new player("Juju McDowell","Junior", "RB", "0","../players/jujum.jpg"));
    players.push(new player("Debo Williams","RS Junior","LB","0"," ../players/debow.jpg"));
    players.push(new player("Trey Knox","Graduate","TE","1","../players/treyk.jpg"));
    players.push(new player("DQ Smith","Sophmore","DB","1","../players/dqs.jpg"));
    players.push(new player("O'Donnell Fortune","RS Junior","DB","3","../players/odonf.jpg"));
    players.push(new player("Antwane Wells Jr.","Senior","WR","3","../players/antwanew.jpg"));
    players.push(new player("Dawkins Terrell","RS Senior","DE","4","../players/terrelld.jpg"));
    players.push(new player("Colten Gauthier","RS Sophmore","QB","4","../players/colteng.jpg"));
    
    for (let i in players) {
        playerList.append(players[i].item);
      }

}
