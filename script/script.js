
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

const result = document.getElementById("resultModal");
const text = document.getElementById("textResult");
const again = document.getElementById("again")



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

const showResult = (results) => {

    if(results === "win") {

        text.innerHTML = `${currentPlayer}!!! O mizeravi é um gênio `
    }  

    else {
      
        text.innerHTML = `Poxa :( infelizmente dessa vez você não conseguir nos ajudar. Tente novamente`
    }
    
    result.classList.remove("hidden");
}

again.addEventListener("click", () =>  window.location.reload());

/* FIM DAS FUNÇÕES */
