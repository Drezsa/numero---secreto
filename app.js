// query selector seleciona uma tagpara fazer alguma mudança
// e innerHTML faz amudança dentro
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// fuction também pode ser usada pra diminuar codigos repetitivos mantendoasmemas funcionalidades, resume a primeira parte de cima.
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial()


// fuções são responsáveis para determinar alguma ação nosso código

function verificarChute() {
    let chute = document.querySelector('input').value;   
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        tentativas++;
        limparCampo();
}

// adicionou uma lista
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumeroNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

}