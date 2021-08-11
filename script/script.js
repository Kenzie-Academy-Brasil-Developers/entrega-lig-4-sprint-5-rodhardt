/* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = [];
let playerTwoChoices = [];
let columns = document.querySelectorAll(".column");
let currentPlayer = "player1";
let player = document.querySelector(".disk");

/* FIM DECLARAÇÃO VARIÁVEIS */

/* COMEÇO DAS FUNÇÕES */

tableGenerator();

function game(event) {
  currentColumn;

  if (checkViability()) {
    createDisk();
    switchPlayer();
  }

  if (checkWin()) {
    showResult("win");
  }

  if (checkDraw()) {
    showResult("draw");
  }
}

function tableGenerator() {}

columns.forEach((element) => {
  element.addEventListener("click", game);
});

function checkViability() {}

function switchPlayer() {
  if (currentPlayer === "player1") {
    player.classList.add(".player1");
    currentPlayer = "player2";
  } else {
    currentPlayer = "player1";
    player.classList.add(".player2");
  }
}

function createDisk(event) {
  let disk = document.createElement("div");
  disk.classList.add("disk");
  mainGame.appendChild(disk);
  let currentColumn = event.currentTarget;
  let currentDisks = currentColumn.querySelectorAll(".disk");
  let diskCount = currentDisks.length;
  let destinySquare = currentColumn.querySelector(
    ".square:nth-child(`${currentColumn - diskCount}`)"
  );
  destinySquare.appendChild(player);
}

function checkWin() {}

function checkDraw() {}

function showResult() {}

function resetGame() {}

/* FIM DAS FUNÇÕES */
