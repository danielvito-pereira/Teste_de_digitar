const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


timer = [0,0,0,0];//seg,centesimos, e milésimos de segundos
var interval;
var timerRunning = false;// isso significa que quando o script é carregado originalmente, o timer não está sendo executado 
// Adiciona zero inicial aos números <= 9 (apenas para estética):
function leadingZero(time) {
    if (time <= 9){//ele converte o valor que está dentro de tempo, para uma string e ela será composta de 0 e qualquer valor que estiver no tempo, dede que seja até 9.
        time= "0" + time;
    }
    return time;
}

// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
    let currentTime =leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":"+ leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);//temporizador 0 é igual a math que o objeto da matematica para encontrar o floor ou piso usado para não oter nenhum número decimal, timer 3 que é um milésimo de segundo dividido por 100, de forma a ser apenas segundos e logo apos dividido por 60 para obter os minutos.

    timer[1] = Math.floor((timer[3]/100)- (timer[0] * 60));//timer 3 é dividido por 100 e , dessa vez, nos vamos subtrair o valor do timer0 que são os minutos,

    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));//novamente temos o floor de math com o timer 3, que é o milésimos de segundos - timer 1 * 100. Para todas as vezes que completarmos 100 centésimos de segundos e voltarmos ao 0 e tamém subtraio o timer 0 * 6000. Agora, toda vez que os minutos atingem 100, não começamos a contar a partir dai.
}

// Verifica se texto digitado com o fornecido na página:
function spellCheck() { 
    let textEntered = testArea.value;// o texto inserido for igual a area de text
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCF3";
        }else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
    
}

// Inicia o cronômetro:
function start(){
    let textEnteredLength = testArea.value.length;//
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning= true;
       interval  = setInterval(runTimer,10); // isso significa que a cada vez que eu aplicar um método de limpar este intervalo n a variável "interval", na verdade, eu estou usando -a  no intervalo definido e, logo após, limpando-a
    }
    
}

// Função de recomeçar:
function reset() {
    clearInterval(interval);//isso garante com que o navegador não execute o intervalo em segundo plano, depos que nós iniciarmos um novo. uma vez que isso desperdiçaria muitos recursos 
    interval = null;// fazemos isso para que, quando atribuimos o intervalo definido na proxima vez que iniciamos no aplicativo,nós não vamos criar um novo intervalo,com um novo número de índice, pois, nesse caso,nos iremos executar varios processos no navegador simultaneamente e, dessa forma, iriamos desperdiçar muitos recursos;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";// é limpar a á rea de texto,seguida de a redefinição
    theTimer.innerHTML= "00:00:00";
    testWrapper.style.borderColor = "grey"
}

// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);//verifica quando o primeiro botão for pressionado
testArea.addEventListener("keyup", spellCheck, false);//quando vc termina de pressionar a tecla 
resetButton.addEventListener("click", reset, false);//botão 



