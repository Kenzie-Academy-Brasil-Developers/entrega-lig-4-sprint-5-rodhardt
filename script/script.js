/* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = [];
let playerTwoChoices = [];


let currentColumn;
let mainGame = document.querySelector(".main-game");


let columns
let currentPlayer = "player1";



/* FIM DECLARAÇÃO VARIÁVEIS */

/* COMEÇO DAS FUNÇÕES */

tableGenerator();

function game(event) {

  currentColumn = event.currentTarget

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

  columns = document.querySelectorAll(".column");
  columns.forEach((element) => {
    element.addEventListener("click", game);
  });
}




function checkViability() {

  let squareArray = currentColumn.querySelectorAll(".disk")

  if (squareArray.length < 6) {
    return true
  } else {
    return false
  }
    
}





function switchPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
  } else {
    currentPlayer = "player1";
  }
}

function createDisk() {
  let disk = document.createElement("div");
  disk.classList.add("disk");
  let currentDisks = currentColumn.querySelectorAll(".disk");
  let diskCount = currentDisks.length;
  let currentSquares = currentColumn.querySelectorAll(".square")
  let squareCount = currentSquares.length
  let destinySquare = currentColumn.querySelector(
    `.square:nth-child(${squareCount - diskCount})`);
  if (currentPlayer === "player1") {
    disk.classList.add("player1");
    destinySquare.appendChild(disk);
    playerOneChoices.push(Number(destinySquare.dataset.square_id));
  } else {
    disk.classList.add("player2");
    destinySquare.appendChild(disk);
    playerTwoChoices.push(Number(destinySquare.dataset.square_id));
  }
}

function checkWin() {}

function checkDraw() {}

function showResult() {}

function resetGame() {}

/* FIM DAS FUNÇÕES */
