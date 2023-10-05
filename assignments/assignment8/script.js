// vars
let quotes = [1, 2, 3, 4, 5];
let index = 0;

//functions
const displayQuotes = () => {
  if (index == 4) index = 0;
  document.getElementById("quote").innerHTML = quotes[index];
  index++;
};

//main
displayQuotes();

/*
while(true){
    setInterval(displayQuotes,2000);
}

*/
