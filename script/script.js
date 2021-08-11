const tableID = []
let colNumber = 7
let rowNumber = 6
let combinationCircle = 4
let maxColCombination = colNumber - combinationCircle + 1
let maxRowCombination = rowNumber - combinationCircle + 1
let maxDiagonalDownCombination = ""//?
let maxDiagonalUpCombination = ""// ?
let possibilities = []


/* COMEÇO DECLARAÇÃO VARIÁVEIS */



const gameTable = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]
]




/* FIM DECLARAÇÃO VARIÁVEIS */




/* COMEÇO DAS FUNÇÕES */



function game() {

    tableGenerator()

    checkViability()
    switchPlayer()
    
    createCircle()

    checkWin()
    
    checkDraw()

    showResult()
}


function tableGenerator() {


}


function checkViability() {

    
}


function switchPlayer() {

    
}


function createCircle() {

    
}

const checkWin = (value) => {
      
  for( let i = 0; i < possibilities.length; i++){
      if (win(value, possibilities[i]) === true){
          console.log("Winer")
          return true
      }
  }
  return false
}



function checkDraw() {

    
}


function showResult() {

    
}

/* FIM DAS FUNÇÕES */



/* FUNÇÕES FILIPE POSSIBILIDADES */


    const generatorTableID = () => {
      const mult = colNumber * rowNumber
      for(let i = 1; i <= mult; i += rowNumber){
          let arr = [];
          let count = 0
          for(let j = 0; j < rowNumber; j++){
              arr.push(i + count)
              count++
          }
          tableID.push(arr)
      }
    }
    generatorTableID()
    
    

    const horizontalGenerator = () => {
      for (let i = 0; i < colNumber; i++) {
        for (let r = 0; r < maxRowCombination; r++) {
          let combination = []
          for (let j = 0; j < combinationCircle; j++) {
            combination.push(tableID[i][j + r])
          }
          possibilities.push(combination)
        }
      }
    }

    
    const diagonalDownGenerator = () => {
      for (let i = 0; i < 4; i++) {
          for (let r = 0; r < 3; r++) {
            let combination = []
            for (let j = 0; j < combinationCircle; j++) {
              combination.push(tableID[i + j][j + r])
            }
            possibilities.push(combination)
          }
        }
    }

    const verticalGenerator = () => {
      for (let i = 0; i < rowNumber; i++) {
        for (let r = 0; r < maxColCombination; r++) {
          let combination = []
          for (let j = 0; j < combinationCircle; j++) {
            combination.push(tableID[j + r][i])
          }
          possibilities.push(combination)
        }
      }
    }

    const diagonalUpGenerator = () => {
      for (let i = 3; i < 7; i++) {
          for (let r = 0; r < 3; r++) {
            let combination = []
            for (let j = 0; j < combinationCircle; j++) {
              combination.push(tableID[i - j][j + r])
            }
            possibilities.push(combination)
          }
        }
    }
    


   const win = (player, condicao) => {
    let count = 0
    for (let i = 0; i < player.length; i++){
        for ( let j = 0; j < condicao.length; j++ ){
            if(player[i] === condicao[j]){
               count++
            }
        }
    }

    if(count === combinationCircle){
    return true
    }
    return false

    }



    const possibilitiesGenerator = () => {
      horizontalGenerator()
      verticalGenerator()
      diagonalDownGenerator()
      diagonalUpGenerator()
    }
    possibilitiesGenerator()



    

    
    