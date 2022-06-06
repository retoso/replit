var linha = ""
var coluna = ""
jogo = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var jogada = 0

function jogar() {    // Jogador X
  var a = true
  while (a) {
    var l, c;
    linha = prompt("linha  0, 1  ou 2 ...: ");
    var ckh = true //valida as opcoes de entrada na linha
    while (ckh) {
      if (linha == "0" || linha == "1" || linha == "2") {
        linha = linha
        ckh = false
      } else {
        linha = prompt("Opcao errada - linha  0, 1  ou 2 ...: ");
        ckh = true
      }
    }
    coluna = prompt("coluna 0, 1  ou 2 ...: ");
    var ckv = true //valida as opcoes de entrada na coluna
    while (ckv) {
      if (coluna == "0" || coluna == "1" || coluna == "2") {
        coluna = coluna
        ckv = false
      } else {
        coluna = prompt("Opcao errada - coluna  0, 1  ou 2 ...: ");
        ckv = true
      }
    }
    if (jogo[linha][coluna] == "") {
      jogo[linha][coluna] = "X"
      a = false
      jogada++
    } else
      a = true
    jogada--
    
  }
}

// Houve ganhadores!!!
var check = true
var l, c;
function ganhou() {
  var vitoria
    /* checando vertical
  00   02  
     11     
  20   22  
  */
  if ((jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2] && jogo[1][1] !="")) {
    return vitoria = prompt("Parabens!!! o jogador " + jogo[0][0] + " Ganhou a partida!!");
    check = false
  } else if ((jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0] && jogo[1][1] !="")) {
    return vitoria = prompt("Parabens!!! o jogador " + jogo[0][2] + " Ganhou a partida!!")
    check = false
  }
  
  /* checando linhas
  00-01-02  l0-l1-l2
  10-11-12  
  20-21-22
  */
  for (l = 0; l < 3; l++) {
    if ((jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2] && jogo[l][0] !="")) {
      return vitoria = prompt("Parabens!!! o jogador " + jogo[l][0] + " Ganhou a partida!!");
      check = false
    }
  }
  /* checando colunas
  00-01-02  0c
  10-11-12  1c
  20-21-22  2c
  */
  for (c = 0; c < 3; c++) {
    if ((jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c])) {
      return vitoria = prompt("Parabens!!! o jogador " + jogo[0][c] + " Ganhou a partida!!");
      check = false
    }
  }
}

console.log("\n\n Bem vindo ao jogo da velha!")

while (check) {
  console.log("\nJogador X Escolha as opções abaixo.\n\n")
  //console.table(jogo) // mostra o tabuleiro e jogadas
  console.log("  coluna       0   -   1   -   2" +
            "\n\n linha 0       "+jogo[0][0]+"   !   "+jogo[0][1]+"   !   "+jogo[0][2]+
            "\n             ____________________"+            
            "\n\n       1       "+jogo[1][0]+"   !   "+jogo[1][1]+"   !   "+jogo[1][2]+
            "\n             ____________________"+     
            "\n\n       2       "+jogo[2][0]+"   !   "+jogo[2][1]+"   !   "+jogo[2][2]+"\n\n")
  jogar()

  // Robo jogando nivel-1 aleatorio
  var a = true
  while (a) {
    var l, c;
    l = Math.floor(Math.random() * 3)
    c = Math.floor(Math.random() * 3)
    if (jogo[l][c] == "") {
      jogo[l][c] = "O"
      a = false
      jogada++
    } else
      a = true
  }
  console.clear() // proxima jogada
  if (jogada >2){
  ganhou()
  }
}