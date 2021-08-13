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
let arrWin = [];
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
let currentColumn;

let currentPlayer = "player1";

let mainGame = document.querySelector(".main-game");

const result = document.getElementById("resultModal");
const text = document.getElementById("textResult");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const dialog = document.getElementById("dialog");

let columns;

let diskCreated = false;
const lastColumn = mainGame.children;
/* FIM DECLARAÇÃO VARIÁVEIS */
const light = () => {
  for (let i = 0; i < lastColumn.length; i++) {
    let children = lastColumn[i].children;
    for (let j = 0; j < children.length; j++) {
      if (arrWin.includes(Number(children[j].dataset.square_id))) {
        children[j].classList.add("winner");
      }
    }
  }
};

/* COMEÇO DAS FUNÇÕES */

tableGenerator();
audio();
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

function switchPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
  } else {
    currentPlayer = "player1";
  }
}

function createDisk(event) {
  let disk = document.createElement("div");
  disk.classList.add("disk");
  let currentDisks = currentColumn.querySelectorAll(".disk");
  let diskCount = currentDisks.length;
  let curretSquares = currentColumn.querySelectorAll(".square");
  let squareCount = curretSquares.length;
  let destinySquare = currentColumn.querySelector(
    `.square:nth-child(${squareCount - diskCount})`
  );
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

function checkViability() {
  let squareArray = currentColumn.querySelectorAll(".disk");

  if (squareArray.length < 6) {
    return true;
  } else {
    return false;
  }
}

const checkWin = () => {
  for (let i = 0; i < possibilities.length; i++) {
    if (win(playerOneChoices, possibilities[i])) {
      arrWin = possibilities[i];
      light();
      return true;
    } else if (win(playerTwoChoices, possibilities[i])) {
      arrWin = possibilities[i];
      light();
      return true;
    }
  }
  return false;
};

const showResult = (results) => {
  if (results === "win") {
    text.innerHTML = `${currentPlayer}!!! O mizeravi é um gênio `;
  } else {
    text.innerHTML = `Poxa :( infelizmente dessa vez você não conseguir nos ajudar. Tente novamente`;
  }

  result.classList.remove("hidden");
};

reset.addEventListener("click", resetGame);
start.addEventListener("click", () => {
  resetGame;

  dialog.classList.add("hidden");
});

function resetGame() {
  mainGame.innerText = "";
  tableGenerator();
  currentPlayer = "player1";
  playerOneChoices = [];
  playerTwoChoices = [];
  result.classList.add("hidden");
}

const generatorTableID = () => {
  const mult = colNumber * rowNumber;
  for (let i = 1; i <= mult; i += rowNumber) {
    let arr = [];
    let count = 0;
    for (let j = 0; j < rowNumber; j++) {
      arr.push(i + count);
      count++;
    }
    tableID.push(arr);
  }
};
generatorTableID();

const horizontalGenerator = () => {
  for (let i = 0; i < colNumber; i++) {
    for (let r = 0; r < maxRowCombination; r++) {
      let combination = [];
      for (let j = 0; j < combinationCircle; j++) {
        combination.push(tableID[i][j + r]);
      }
      possibilities.push(combination);
    }
  }
};

const checkDraw = () => {
  let squareCount = document.querySelectorAll(".square");
  let diskCount = document.querySelectorAll(".disk");

  return squareCount.length === diskCount.length;
};

const diagonalDownGenerator = () => {
  for (let i = 0; i < 4; i++) {
    for (let r = 0; r < 3; r++) {
      let combination = [];
      for (let j = 0; j < combinationCircle; j++) {
        combination.push(tableID[i + j][j + r]);
      }
      possibilities.push(combination);
    }
  }
};

const verticalGenerator = () => {
  for (let i = 0; i < rowNumber; i++) {
    for (let r = 0; r < maxColCombination; r++) {
      let combination = [];
      for (let j = 0; j < combinationCircle; j++) {
        combination.push(tableID[j + r][i]);
      }
      possibilities.push(combination);
    }
  }
};

const diagonalUpGenerator = () => {
  for (let i = 3; i < 7; i++) {
    for (let r = 0; r < 3; r++) {
      let combination = [];
      for (let j = 0; j < combinationCircle; j++) {
        combination.push(tableID[i - j][j + r]);
      }
      possibilities.push(combination);
    }
  }
};

const win = (player, condicao) => {
  let count = 0;
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < condicao.length; j++) {
      if (player[i] === condicao[j]) {
        count++;
      }
    }
  }
  if (count === combinationCircle) {
    return true;
  }
  return false;
};

const possibilitiesGenerator = () => {
  horizontalGenerator();
  verticalGenerator();
  diagonalDownGenerator();
  diagonalUpGenerator();
};
possibilitiesGenerator();

function audio() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    audio1.play();
    audio1.volume = 0.2;
  } else {
    audio2.play();
    audio2.volume = 0.2;
    console.log("a viewport menos que 800 pixels de largura");
  }
}

/* FIM DAS FUNÇÕES */
