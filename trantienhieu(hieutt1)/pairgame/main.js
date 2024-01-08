const game = document.getElementById("game");


function startGame(game, cardsNumber) {
  const cardsNumberArr = [];
  let firstCard = null; 
  let secondCard = null; 
  

  for (let i = 1; i <= cardsNumber; i++) {

    cardsNumberArr.push(i, i);
  }

  for (let i = 0; i < cardsNumberArr.length; i++) {
    
    let randomIndex = Math.floor(Math.random() * cardsNumberArr.length); 
 
    let tmp = cardsNumberArr[i];
    cardsNumberArr[i] = cardsNumberArr[randomIndex];
    cardsNumberArr[randomIndex] = tmp;
  }



  for (let cardNumber of cardsNumberArr) {
    let card = document.createElement("div");
    card.textContent = cardNumber;
    card.classList.add("card");


    card.addEventListener("click", function () {
      if (
        card.classList.contains("open-card") ||
        card.classList.contains("success")
      ) {
        return;
      }

      if (firstCard !== null && secondCard !== null) {
  
        firstCard.classList.remove("open-card");
        secondCard.classList.remove("open-card");
 
        firstCard = null;
        secondCard = null;
      }

      card.classList.add("open-card");


      if (firstCard === null) {
       
        firstCard = card; 
      } else {
        secondCard = card;
      }

      
      if (firstCard !== null && secondCard !== null) {
        
        let firstCardNumber = firstCard.textContent;
        let secondCardNumber = secondCard.textContent;

        if (firstCardNumber === secondCardNumber) {
          firstCard.classList.add("success");
          secondCard.classList.add("success");
        }
      }
     
      if (
        cardsNumberArr.length === document.querySelectorAll(".success").length
      ) {
        setTimeout(function () {
          game.innerHTML = ""; 
          alert("Hoan thanh game!");
          let cardsNumber = +prompt("Nhap so cap the", 4);
          startGame(game, cardsNumber); 
        }, 500);
      }
    });

    game.append(card); 
  }
}

let cardsNumber = +prompt("Nhap so cap the", 4); 

startGame(game, cardsNumber);