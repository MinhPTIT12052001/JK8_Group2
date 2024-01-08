const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 1;
let isOverGame = false;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
document.querySelector(".score").textContent = score;
let totalCard;
let countCards;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    totalCard = countCards = cards.length;
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  if (!checkMatch()) {
    score++;
  }
  document.querySelector(".score").textContent = score;
  lockBoard = true;
  checkOverGame();
  checkForMatch();
}

function checkForMatch() {
  let isMatch = checkMatch();
  isMatch ? disableCards() : unflipCards();
}

function checkMatch() {
  return firstCard.dataset.name === secondCard.dataset.name;
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  isOverGame = false;
  countCards = totalCard;
  gridContainer.innerHTML = "";
  generateCards();
}

function checkOverGame() {
  if (checkMatch()) {
    countCards -= 2;
  }
  
  if (countCards === 0) {
    isOverGame = true;
    if (isOverGame) {
      getTotalScore();
      setTimeout(() => {
        openModal();
      }, 1000);
    }
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  restart();
}

function getTotalScore() {
  document.querySelector(".total-score").textContent = score;
}
