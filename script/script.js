// [[12345], [1234], []]

// let selectedSquare = document.querySelector(`.col:nth-chil(${3}) .square:nth-child(${2})`)


/* COMEÇO DECLARAÇÃO VARIÁVEIS */



// const gameTable = [
// [1,2,3,4,5,6],
// [1,2,3,4,5,6],
// [1,2,3,4,5,6],
// [1,2,3,4,5,6],
// [1,2,3,4,5,6],
// [1,2,3,4,5,6],
// [1,2,3,4,5,6]
// ]






/* FIM DECLARAÇÃO VARIÁVEIS */




/* COMEÇO DAS FUNÇÕES */



function game() {

    tableGenerator()

    checkViability()
    switchPlayer()
    
    createCircle()

    checkWin()
    
    checkDraw()

}




function checkWin() {


    checkHorizontal()
    checkVertical()
    checkDiagonal()


}




/* FIM DAS FUNÇÕES */
