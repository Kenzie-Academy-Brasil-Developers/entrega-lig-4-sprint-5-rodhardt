
/* COMEÇO DECLARAÇÃO VARIÁVEIS */

let playerOneChoices = []
let playerTwoChoices = []

let currentColumn

let currentPlayer = "player1"

/* FIM DECLARAÇÃO VARIÁVEIS */




/* COMEÇO DAS FUNÇÕES */



tableGenerator()



function game(event) {

  currentColumn

  if (checkViability()) {
    createDisk()
    switchPlayer()
  }
    
  if (checkWin()) {
    showResult("win")
  }    

  if (checkDraw()) {
    showResult("draw")
  }
  
}


function tableGenerator() {


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

    
}


function createDisk() {


}


function checkWin() {


}


function checkDraw() {


}


function showResult() {

    
}


function resetGame() {

}

/* FIM DAS FUNÇÕES */
