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
let turn = 0;
let score = 0;
let totalSuccess = 0;
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
      turn++;
      document.getElementById("turn").innerText = turn;
    } else if (carSelected1.src === cardSelected2.src) {
      totalSuccess++;
      if (totalSuccess === 15) {
        score = calculateScore(turn);
        displayModal(score);
      }
    }
    carSelected1 = null;
    cardSelected2 = null;
  }

  function displayModal(score) {
    // Lấy đối tượng modal
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

    // Hiển thị modal
    myModal.show();

    // Cập nhật nội dung modal
    document.getElementById("modalBody").innerText =
      "Điểm của bạn là: " + score;
  }
  function calculateScore(a) {
    if (a < 10) {
      return 10;
    } else if (a < 12) {
      return 9;
    } else if (a < 14) {
      return 8;
    } else if (a < 16) {
      return 7;
    } else if (a < 18) {
      return 6;
    } else if (a < 20) {
      return 5;
    } else if (a < 22) {
      return 4;
    } else if (a < 24) {
      return 3;
    } else if (a < 30) {
      return 2;
    } else {
      return 1;
    }
  }
}
// function restartGame() {
//   // Đặt lại các biến và mảng để bắt đầu trò chơi mới
//   turn = 0;
//   score = 0;
//   totalSuccess = 0;
//   carSelected1 = null;
//   cardSelected2 = null;
//   main = [];

//   // Xóa các thẻ hiện tại trong #main
//   document.getElementById("main").innerHTML = "";

//   // Tạo lại và bắt đầu trò chơi mới
//   shuffleCards();
//   startGame();

//   // Ẩn modal
//   var myModal = new bootstrap.Modal(
//     document.getElementById("exampleModal"),
//     {}
//   );
//   myModal.hide();
// }
