//* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = [];
let playerTwoChoices = [];

let currentColumn;
let columns;
let currentPlayer = "player1";
let mainGame = document.querySelector(".main-game");

/* FIM DECLARAÇÃO VARIÁVEIS */

/* COMEÇO DAS FUNÇÕES */

let mainGame = document.querySelector(".main-game");

for (let i = 0; i < 7; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  column.id = `column_${i}`;
  mainGame.appendChild(column);
  for (let j = 0; j < 6; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.id = j + i * 7;
    column.appendChild(square);
  }
}
function createDisk() {
  let disk = document.createElement("div");
  disk.classList.add("disk");
  mainGame.appendChild(disk);
}
createDisk();
let player = document.querySelector(".disk");

let currentPlayer = "player1";
function swichPlayer() {
  if (currentPlayer === "player1") {
    player.classList.add(".player1");
    currentPlayer = "player2";
  } else {
    currentPlayer = "player1";
    player.classList.add(".player2");
  }
}

let columns = document.querySelectorAll(".column");

columns.forEach((element) => {
  element.addEventListener("click", pickColumn);
});

function pickColumn(event) {
  let selectColumn = event.currentTarget;

  let id = document.getElementById("column_2");
  for (let i = id[length - 1]; i >= 0; i--) {}
  console.log(selectColumn.lastChild);
  selectColumn.lastChild.style.backgroundColor = "red";
}

function tableGenerator() {}

function checkViability() {}

function switchPlayer() {}

function createDisk() {}

function checkWin() {}

function checkDraw() {}

function showResult() {}

function resetGame() {}

/* FIM DAS FUNÇÕES */
