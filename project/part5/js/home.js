const getHome = async ()=>{
    const url = "home.json";
    try {
     const response = await fetch(url);
      return await response.json();
  }catch (error) {
      console.log(error);
  }
  
  }
  
  const showHome = async ()=>{
  
    let articles = await getArticle();
    let articleSection = document.getElementById("articleList");
  
    //
   articles.forEach((article)=>{
    
    articleSection.append(getArticleItem(article));
    });
  
  }
  
    const getArticleItem = (article)=> {
      const playerSection = document.createElement("section");
      playerSection.classList.add("player");
  
      const pic = document.createElement("img");
      pic.src = player.img;
      playerSection.appendChild(pic);
  
      const pname = document.createElement("p");
      pname.innerText = player.name;
      playerSection.appendChild(pname);
  
      const year = document.createElement("p");
      year.innerText = `class of ${player.year}`;
      playerSection.appendChild(year);
  
      const position = document.createElement("p");
      position.innerText = player.position;
      playerSection.appendChild(position);
  
      const number = document.createElement("p");
      number.innerText = '#' + player.number;
      playerSection.appendChild(number);
  
      return playerSection;
    }
  
  
  window.onload = () => showPlayer();
  