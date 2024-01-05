let cardsList = [
  "angular",
  "c",
  "combol",
  "html",
  "java",
  "js",
  "php",
  "python",
  "ruby",
  "spring",
  "cSh",
  "nodejs",
  "css",
  "vuejs",
  "react",
];
const rows = 5;
const columns = 6;

let carSelected1;
let cardSelected2;
let totalCards;
let main = [];

window.onload = function () {
  shuffleCards();
  startGame();
};

function shuffleCards() {
  totalCards = cardsList.concat(cardsList);
  console.log(totalCards);

  for (let i = 0; i < totalCards.length; i++) {
    let j = Math.floor(Math.random() * totalCards.length);
    let temp = totalCards[i];
    totalCards[i] = totalCards[j];
    totalCards[j] = temp;
  }
  console.log(totalCards);
}

function startGame() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      let cartItem = totalCards.pop();
      row.push(cartItem);

      let cardElement = document.createElement("img");
      cardElement.id = i.toString() + j.toString();
      cardElement.src = "./img/" + cartItem + ".jpg";
      cardElement.classList.add("card");
      cardElement.addEventListener("click", selectCard);
      document.getElementById("main").append(cardElement);
    }
    main.push(row);
  }
  console.log(main);
  setTimeout(hideCards, 1000);
}

function hideCards() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let CardElement = document.getElementById(i.toString() + j.toString());
      CardElement.src = "./img/Aht.jpg";
    }
  }
}

function selectCard() {
  if (this.src.includes("Aht")) {
    if (!carSelected1) {
      carSelected1 = this;
      let tmp = carSelected1.id;
      let x = tmp.charAt(0);
      let y = tmp.charAt(1);
      carSelected1.src = "./img/" + main[x][y] + ".jpg";
    } else if (!cardSelected2 && carSelected1 != this) {
      cardSelected2 = this;
      let tmp = cardSelected2.id;
      let x = tmp.charAt(0);
      let y = tmp.charAt(1);
      cardSelected2.src = "./img/" + main[x][y] + ".jpg";
      setTimeout(update, 1000);
    }
  }
}

function update() {
  if (carSelected1.src != cardSelected2.src) {
    carSelected1.src = "./img/Aht.jpg";
    cardSelected2.src = "./img/Aht.jpg";
  }
  carSelected1 = null;
  cardSelected2 = null;
}
