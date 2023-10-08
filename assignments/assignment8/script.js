

// vars
let quotes = [1, 2, 3, 4, 5];
let index = 0;
const elemnt = document.getElementById(".quote");
//functions

const displayQuotes = () => {
  if (index == 4){
   index = 0;
  }
  console.log("worked");
  elemnt.innerHTML ="123";
  index++;
  
};

//main
window.onload = displayQuotes();


/*
while(true){
    setInterval(displayQuotes,2000);
}

*/
