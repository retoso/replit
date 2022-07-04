function bombas(tabuleiro, linha, coluna) {
    let tab = [];
    let acertou = true;
    if (tabuleiro[linha][coluna] == "-") {
        acertou = false

    } else { acertou = true }


    var jogador1, jogador2;
    //Jogador da rodada
    var jogadorAtual;
    var forma = "+";
    jogadorAtual = forma;
    bombas[linha][coluna] = barco
    console.table(tabuleiro)
    return acertou
}
let tabuleiro = []
for (let i = 0; i < 5; i++) {
    tabuleiro.push([])
    for (let j = 0; j < 5; j++) {
        tabuleiro[i].push("-")

    }
}
console.table(tabuleiro)
let linha = prompt("Digite a linha: ")
let coluna = prompt("Digite a coluna:")

bombas(tabuleiro, linha, coluna);

var navio1 = 2;
var navio2 = 3;
var navio3 = 4;
var jogada;
var acertou=0;
var foiAfundado = false;

while (!foiAfundado ) {
jogada = prompt (bombas);  
if (jogada) {
coordenadas == ~ 
    console.log ("Nenhuma embarcação atingida")
} else if (jogada) {
  == < || == = || == >
    console.log ("Parte do navio acertada!")
    jogada = jogada + 1;}

    if (jogada==navio1||jogada==navio2||jogada==navio3){
      alert("acerte mais um quadro!"):
      acertou=acertou+1;
    if(acertou==3){
      foiAfundado=true;
      alert("navio totalmente afundado!");
    }
    
    }
}
}