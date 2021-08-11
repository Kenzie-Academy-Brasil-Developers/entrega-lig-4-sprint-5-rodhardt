/* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = [];
let playerTwoChoices = [];

let currentColumn;
let mainGame = document.querySelector(".main-game");
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

function tableGenerator() {

  for (let i = 0; i < 7; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    column.id = `column_${i}`;
    mainGame.appendChild(column);
    for (let j = 0; j < 6; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.dataset.square_id = j + i * 6 + 1;
      column.appendChild(square);
    }
  }
}


function checkViability() {

  let squareArray = currentColumn.querySelectorAll(".disk")

  if (squareArray.length < 6) {
    return true
  } else {
    return false
  }
    
}



function checkViability() {}

function switchPlayer() {}

function createDisk() {}

function checkWin() {}

function checkDraw() {}

function showResult() {}

function resetGame() {}

/* FIM DAS FUNÇÕES */
