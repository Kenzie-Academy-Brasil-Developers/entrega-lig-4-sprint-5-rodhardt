/* COMEÇO DECLARAÇÃO VARIÁVEIS */

const tableID = [];
let colNumber = 7;
let rowNumber = 6;
let combinationCircle = 4;
let maxColCombination = colNumber - combinationCircle + 1;
let maxRowCombination = rowNumber - combinationCircle + 1;
let maxDiagonalDownCombination = ""; //?
let maxDiagonalUpCombination = ""; // ?
let possibilities = [];
let playerOneChoices = [];
let playerTwoChoices = [];

let currentColumn;

let currentPlayer = "player1";

let mainGame = document.querySelector(".main-game");

const result = document.getElementById("resultModal");
const text = document.getElementById("textResult");
const again = document.getElementById("again");

let columns;

let diskCreated = false;

/* FIM DECLARAÇÃO VARIÁVEIS */

/* COMEÇO DAS FUNÇÕES */

tableGenerator();

function game(event) {
  currentColumn = event.currentTarget;

  diskCreated = false;

  if (checkViability()) {
    createDisk();
    diskCreated = true;
  }

  if (checkWin()) {
    showResult("win");
  }

  if (checkDraw() & (checkWin() === false)) {
    showResult("draw");
  }

  if (diskCreated) {
    switchPlayer();
  }
}

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
