var linha = ""
var coluna = ""

function jogar(){ 
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
}

        // Houve ganhadores!!!
var check = true
var l, c;
function ganhou() {        
  var vitoria

  /* checando linhas
  00-01-02  l0-l1-l2
  10-11-12  
  20-21-22
  */
  for (l = 0; l < 3; l++) {
    if ((jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2])) {
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
  /* checando vertical
  00   02  
     11     
  20   22  
  */
       if ((jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2])) {
        return vitoria = prompt("Parabens!!! o jogador " + jogo[0][0] + " Ganhou a partida!!");
        check = false
      } else if  ((jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0])) {
        return vitoria = prompt("Parabens!!! o jogador " + jogo[0][2] + " Ganhou a partida!!");
        check = false
    }  
}

resultado = [
  ["O", "", ""],
  ["", "", ""],
  ["", "", ""],
];
jogo = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var jogada = 0

console.log("\n\n Bem vindo ao jogo da velha!")
console.log("\n Selecione uma opção abaixo:\n" +   //painel de instrucoes
  "\n Na linha...: 0 - 1 - 2" +
  "\n Na coluna..: 0 - 1 - 2" +
  "\n\n Exemplo........: 00 ")
console.table(resultado)


while (check) {
  if (jogada > 4) { 
    ganhou ()
  }
 
  console.log("\nJogador X Escolha as opções abaixo.\n\n")
  console.table(jogo) // mostra o tabuleiro e jogadas
jogar()

  // let linha = prompt("linha  0, 1  ou 2 ...: ");

  // var ckh = true //valida as opcoes de entrada na linha
  // while (ckh) {
  //   if (linha == "0" || linha == "1" || linha == "2") {
  //     linha = linha
  //     ckh = false
  //   } else {
  //     linha = prompt("Opcao errada - linha  0, 1  ou 2 ...: ");
  //     ckh = true
  //   }
  // }

  // let coluna = prompt("coluna 0, 1  ou 2 ...: ");

  // var ckv = true //valida as opcoes de entrada na coluna
  // while (ckv) {
  //   if (coluna == "0" || coluna == "1" || coluna == "2") {
  //     coluna = coluna
  //     ckv = false
  //   } else {
  //     coluna = prompt("Opcao errada - coluna  0, 1  ou 2 ...: ");
  //     ckv = true
  //   }
  // }

  if (linha == "0") {
    if (coluna == "0") {
      if (jogo[0][0] == "") {
        jogo[0][0] = "X";
      } else jogar ()
    } else if (coluna == "1") {
      if (jogo[1][0] == "") {
        jogo[1][0] = "X";
      } else jogar () 
    } else if (coluna == "2") {
      if (jogo[2][0] == "") {
        jogo[2][0] = "X";
      }else jogar ()
    }
  } else if (linha == "1") {
    if (coluna == "0") {
      if (jogo[0][1] == "") {
        jogo[0][1] = "X";
      } else jogar ()
    } else if (coluna == "1") {
      if (jogo[1][1] == "") {
        jogo[1][1] = "X";
      } else jogar ()
    } else if (coluna == "1") {
      if (jogo[2][1] == "") {
        jogo[2][1] = "X";
      } else jogar ()
    }
  } else if (linha == "2") {
    if (coluna == "0") {
      if (jogo[0][2] == "") {
        jogo[0][2] = "X";
      } else jogar ()
    } else if (coluna == "1") {
      if (jogo[1][2] == "") {
        jogo[1][2] = "X";
      } else jogar ()
    } else if (coluna == "2") {
      if (jogo[2][2] == "") {
        jogo[2][2] = "X";
      } else jogar ()
    }
  }
  // Robo jogando nivel-1 aleatorio
  var a = true
  while (a) {
    var l, c;
    l = Math.floor(Math.random() * 3)
    c = Math.floor(Math.random() * 3)
    console.log(l)
    console.log(c)
    if (jogo[l][c] == "") {
      jogo[l][c] = "O"
      a = false
    } else
      a = true
      jogada++
  }

  console.clear() // proxima jogada
  
}