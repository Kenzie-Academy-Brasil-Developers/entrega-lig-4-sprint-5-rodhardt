
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


function checkViability(col) {

    if (col.includes(0)) {
        return true
    } else {
        return false
    }
    
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
