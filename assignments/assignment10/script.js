
   
   const getMovies = async () =>{
  const url = "https://portiaportia.github.io/json/movies.json";

        try {
            const response = await fetch(url);
            return await response.json();
        }catch (error) {
            console.log(error);
        }
   }
   
   
   
   
   const showMovies = async () => {
      let movies = await getMovies();
      let movieSection = document.getElementById("movie-section");

      
        
        movies.forEach((movie) => {
            movieSection.append(getMovieItem(movie));
        });
      

    }

    const getMovieItem = (movie)=>{
        let section = document.createElement("section");
        section.id = "movie-contain";

        let side1 = document.createElement("section");
        side1.id = "side1";
        
        let side2 = document.createElement("section");
        side2.id = "side2";

       
        //side 1 

        let img = document.createElement("img");
        img.src = "https://portiaportia.github.io/json/" + movie.img;
        side1.appendChild(img);


        //side 2
         let h3 = document.createElement("h3");
        h3.innerHTML = movie.title;
        side2.appendChild(h3);

        let ul = document.createElement("ul");
        side2.append(ul);
        ul.append(getLi(movie.director));
        ul.append(getLi(movie.actors));
        ul.append(getLi(movie.year));
        ul.append(getLi(movie.genres));
        ul.append(getLi(movie.description));

        section.appendChild(side1);
        section.appendChild(side2);

        return section;
    }

    const getLi = (data) =>{
        const li = document.createElement("li");
        li.textContent = data;
        return li;
    }

    window.onload = () => showMovies();