
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




let possibilities = []
let table = 42
let victoryCondition = 4



// ---------------   HORIZONTAL  --------------------
const generatorH = (table, value) => {
    for(let i = 1; i <= table; i+=7){
        let init = i
            for(let j = 0; j < victoryCondition; j++){
                if(init + j === value){
                    possibilities.push(multiplyH(value))
                }
            }
    }
}
const multiplyH  = (value) => {
    let output = []
    for(let i = 0; i < victoryCondition; i++){
        output.push(value + i)
    }
    return output
}
for(let i = 0; i < table; i++){
    generatorH(table, i)
}

//=----- VERTICAL ---------
const multiplyV = (value) => {
    let output = [value]
    for(let i = 0; i < 3; i++){
        output.push(value += 7)
    }
    return output
}
for(let i = 1; i <= table / 2; i++){
    possibilities.push(multiplyV(i))
}
// ----------DIAGONAL--------------
const generatorDiagonal = (table, valor) => {
    for(let i = 1; i <= table; i+=7){
        let init = i
            for(let j = 0; j < victoryCondition; j++){
                if(init + j === valor){
                    possibilities.push(multiplyDiagonal(valor))
                }
            }
    }
}
const multiplyDiagonal =  (value) => {
    let output = [value]
    for(let i = 0; i < 3; i++){
        output.push(value += 8)
    }
    return output
}
for(let i = 0; i <= 18; i++){
    generatorDiagonal(table, i)
}
//-------------Reverse--------------
const generatorDiagonalReverse = (table, valor) => {
    for(let i = 20; i <= table; i++){
        if(i % 7 === 0){
            let init = i + 1
            for(let j = 0; j < victoryCondition; j++){
                if(init + j === valor){
                    possibilities.push(multiplicaDiagonalReverse(valor))
                }
            }
        } 
    }
}
const multiplicaDiagonalReverse =  (value) => {
    let output = [value]
    for(let i = 0; i < 3; i++){
        output.push(value -= 6)
    }
    return output
}
for(let i = 0; i <= table; i++){
    generatorDiagonalReverse(table, i)
}