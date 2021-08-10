
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


function checkWin() {


    checkHorizontal(i, j)
    checkVertical(i, j)
    checkDiagonal(i, j)
    checkDiagonalReverse(i, j)

}


function checkDraw() {

    
}


function showResult() {

    
}

/* FIM DAS FUNÇÕES */



/* FUNÇÕES FILIPE POSSIBILIDADES */




// let possibleResults = []
// let table = 42
// let victoryCondition = 4

// teste token

// // ---------------   HORIZONTAL  --------------------
    // const generatorH = (table, value) => {
    //     for(let i = 1; i <= table; i+=7){
    //         let init = i
    //             for(let j = 0; j < victoryCondition; j++){
    //                 if(init + j === value){
    //                     possibleResults.push(multiplyH(value))
    //                 }
    //             }
    //     }
    // }
    // const multiplyH  = (value) => {
    //     let output = []
    //     for(let i = 0; i < victoryCondition; i++){
    //         output.push(value + i)
    //     }
    //     return output
    // }
    // for(let i = 0; i < table; i++){
    //     generatorH(table, i)
    // }

    // //=----- VERTICAL ---------
    // const multiplyV = (value) => {
    //     let output = [value]
    //     for(let i = 0; i < 3; i++){
    //         output.push(value += 7)
    //     }
    //     return output
    // }
    // for(let i = 1; i <= table / 2; i++){
    //     possibleResults.push(multiplyV(i))
    // }
    // // ----------DIAGONAL--------------
    // const generatorDiagonal = (table, valor) => {
    //     for(let i = 1; i <= table; i+=7){
    //         let init = i
    //             for(let j = 0; j < victoryCondition; j++){
    //                 if(init + j === valor){
    //                     possibleResults.push(multiplyDiagonal(valor))
    //                 }
    //             }
    //     }
    // }
    // const multiplyDiagonal =  (value) => {
    //     let output = [value]
    //     for(let i = 0; i < 3; i++){
    //         output.push(value += 8)
    //     }
    //     return output
    // }
    // for(let i = 0; i <= 18; i++){
    //     generatorDiagonal(table, i)
    // }
    // //-------------Reverse--------------
    // const generatorDiagonalReverse = (table, valor) => {
    //     for(let i = 20; i <= table; i++){
    //         if(i % 7 === 0){
    //             let init = i + 1
    //             for(let j = 0; j < victoryCondition; j++){
    //                 if(init + j === valor){
    //                     possibleResults.push(multiplicaDiagonalReverse(valor))
    //                 }
    //             }
    //         } 
    //     }
    // }
    // const multiplicaDiagonalReverse =  (value) => {
    //     let output = [value]
    //     for(let i = 0; i < 3; i++){
    //         output.push(value -= 6)
    //     }
    //     return output
    // }
    // for(let i = 0; i <= table; i++){
    //     generatorDiagonalReverse(table, i)
    // }



// -----------------------------
//-   COMBINAÇÕES POR ÍNDICE
//------------------------------
const tableID = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36],
  [37,38,39,40,41,42],
  ]
  
let win = 4
let colNumber = tableID.length
let rowNumber = tableID[0].length
let maxRowCombination = rowNumber - win + 1
let maxColCombination = colNumber - win + 1


let possibleResults = []




    function horizontalGenerator() {
      for (let i = 0; i < colNumber; i++) {
        for (let r = 0; r < maxRowCombination; r++) {
          let arrayCombination = []
          for (let j = 0; j < win; j++) {
            arrayCombination.push(tableID[i][j + r])
          }
          possibleResults.push(arrayCombination)
        }
      }
    }
    function diagonalDownGenerator() {
      for (let i = 0; i < maxColCombination; i++) {
          for (let r = 0; r < 3; r++) {
            let arrayCombination = []
            for (let j = 0; j < win; j++) {
              arrayCombination.push(tableID[i + j][j + r])
            }
            possibleResults.push(arrayCombination)
          }
        }
    }
    function verticalGenerator() {
      for (let i = 0; i < rowNumber; i++) {
        for (let r = 0; r < maxColCombination; r++) {
          let arrayCombination = []
          for (let j = 0; j < win; j++) {
            arrayCombination.push(tableID[j + r][i])
          }
          possibleResults.push(arrayCombination)
        }
      }
    }
    function diagonalUpGenerator() {
      for (let i = maxRowCombination; i < colNumber; i++) {
          for (let r = 0; r < maxRowCombination; r++) {
            let arrayCombination = []
            for (let j = 0; j < win; j++) {
              arrayCombination.push(tableID[i - j][j + r])
            }
            possibleResults.push(arrayCombination)
          }
        }
    }
    function possibilitiesGenerator() {
      horizontalGenerator()
      diagonalDownGenerator()
      verticalGenerator()
      diagonalUpGenerator()
    }
    possibilitiesGenerator()
    