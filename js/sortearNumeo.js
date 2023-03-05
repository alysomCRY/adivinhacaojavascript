const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    
    return parseInt(Math.random() * maiorValor + 1) 
}

const valorMenor = document.querySelector("#menor-valor")
function passarMenorValor() {
    valorMenor.textContent = menorValor;

const valorMaior = document.querySelector("#maior-valor"); 
valorMaior.innerHTML = maiorValor;   
    console.log(numeroSecreto);
}

passarMenorValor()

