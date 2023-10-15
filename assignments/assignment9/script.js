class toy {
  constructor(title, age, rating, pic) {
    this.title = title;
    this.age = age;
    this.rating = rating;
    this.pic = pic;
  }

  get item() {
    const toySection = document.createElement("section");
    toySection.classList.add("toy");


    const heading = document.createElement("h3");
    heading.innerText = this.title;
    toySection.appendChild(heading);

    const age = document.createElement("p");
    age.innerText = `Age: ${this.age} Years`;
    toySection.appendChild(age);

    const ratings = document.createElement("p");
    ratings.innerText = `Rating: ${this.rating} out of 5`;
    toySection.appendChild(ratings);

    toySection.style.backgroundImage = `url(${this.pic})`;


    
    return toySection;
  }
}

window.onload = () => {
  let toys = [];
  let toyList = document.getElementById("toyList");

  toys.push(new toy("Transformer", "5-12", 5, "./images/transformers.jpg"));
  toys.push(new toy("Uno", "5-18", 4, "./images/uno.jpg"));
  toys.push(new toy("Bike", "9-12" , 2, "./images/bike.jpg"));
  toys.push(new toy("Nerf", "10-18", 4, "./images/nerf.jpg"));
  toys.push(new toy("Hotwheels", "8-15", 3, "./images/car.jpg"));
  toys.push(new toy("Legos", "7-18", 5, "./images/legos.jpg"));

  for (let i in toys) {
    toyList.append(toys[i].item);
  }
};
