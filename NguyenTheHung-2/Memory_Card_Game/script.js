const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
scoreTag = document.querySelector(".score span"),
refreshBtn = document.querySelector(".details button");

let maxTime = 40;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let score = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;    
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000, stopGame);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        if(!matchCards(cardOneImg, cardTwoImg)) {
            stopGame();
        }        
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        score += 10;
        if(matchedCard == 8 && timeLeft > 0) {
            alert(`Bạn đã ghi được ${score} điểm!`);
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        scoreTag.innerText = score;
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    score = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    scoreTag.innerText = score;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

function stopGame() {
    if (timeLeft <= 0 || flips >= 20) {
      clearInterval(timer);
      isPlaying = false;
      disableDeck = isPlaying = false;      
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);

      cards.forEach((card) => {
        card.removeEventListener("click", flipCard);
      });
      scoreTag.innerText = score;

      alert(`Bạn đã ghi được ${score} điểm!`);
      alert("Nhấn refresh để chơi mới")
    }
  }

  
shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});