function verificaChuteValor(chute) {
    const numero = +chute
    if (vereficaValorNumero(numero)) {
         elementoChute.innerHTML += "<div>Valor inválido</div>"
         return
    }
    if(numeroMaiorMenor(numero)){
         elementoChute.innerHTML += `<div>O numero deve estar entre ${menorValor} e ${maiorValor}</div>`;
         return
    }
    if (numero === numeroSecreto){
        document.body.innerHTML = ` 
            <h2>Você acertou!!!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="Reiniciar" class= "botao-reiniciar">Jogar Novamente</button>
        `
    }else if (numero  > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function vereficaValorNumero(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor (numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", event => {
    if(event.target.id == "Reiniciar" ) {
        window.location.reload()

    }
})