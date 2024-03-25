function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
                
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else
    {

        tentativas +=1;
        limparcampo();

        if(chute > numeroSecreto){
            
            exibirTextoNaTela('p', 'O número secreto é menor.');

        }else{

            exibirTextoNaTela('p', 'O número secreto é maior.');

        }

    }
    
}

function exibirTextoNaTela(tag, texto){
    
    let mTag = document.querySelector(tag);
    mTag.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function gerarNumeroAleatorio() {
    
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        
        listaDeNumerosSorteados = [];

    }

    if(listaDeNumerosSorteados.includes(NumeroEscolhido)){

        NumeroEscolhido = gerarNumeroAleatorio();

    }

    listaDeNumerosSorteados.push(NumeroEscolhido);

    return NumeroEscolhido;

}

function limparcampo() {

    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparcampo();
    exibirMendagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function exibirMendagemInicial(){
    
    exibirTextoNaTela('h1', 'Jogo do Número Secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLimite + '.');

}

let numeroSecreto;
let tentativas;
let listaDeNumerosSorteados = [];
let numeroLimite = 100;

reiniciarJogo();

