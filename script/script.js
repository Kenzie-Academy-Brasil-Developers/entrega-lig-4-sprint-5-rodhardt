/* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = [];
let playerTwoChoices = [];

let currentColumn;

let currentPlayer = "player1";

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

function createDisk() {}

function checkWin() {}

function checkDraw() {}

function showResult() {}

function resetGame() {}

/* FIM DAS FUNÇÕES */
