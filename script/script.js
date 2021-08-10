
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

function showResult(results) {

    const result = document.getElementById("resultModal");
    const text = document.getElementById("textResult");

    if(results === undefined) {

        text.innerHTML = `Poxa :( infelizmente dessa vez você não conseguir nos ajudar. Tente novamente`
    }  
    
    else {
      
        text.innerHTML = `Parabéns ${results} você nos ajudou com as esferas`
    }
    result.classList.add("result");
}

const again = document.getElementById("again")

again.addEventListener("click", () =>  window.location.reload());

/* FIM DAS FUNÇÕES */
