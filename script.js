const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


timer = 0;
// Adiciona zero inicial aos números <= 9 (apenas para estética):


// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
    theTimer.innerHTML = timer;
    timer++;
}

// Verifica se texto digitado com o fornecido na página:
function spellCheck() { 
    let textEntered = testArea.value;// o texto inserido for igual a area de text
    console.log(textEntered);
}

// Inicia o cronômetro:
function start(){
    let textEnteredLength = testArea.value.length;//
    if (textEnteredLength === 0) {
        setInterval(runTimer,10);
    }
    console.log(textEnteredLength);
}

// Função de recomeçar:
function reset() {
    console.log("O botão de recomeçar foi clicado.");
}

// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);//verifica quando o primeiro botão for pressionado
testArea.addEventListener("keyup", spellCheck, false);//quando vc termina de pressionar a tecla 
resetButton.addEventListener("click", reset, false);//botão 



