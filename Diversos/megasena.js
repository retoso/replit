
var qtdJogos
var jogo = []


function jogofinal() {
  for (let i = 1; i <= 6; i++) {
    jogo.push(Math.floor(Math.random() * 60) + 1)
    jogo.sort()
  }
  var tmp = [];
  for (var i = 0; i < jogo.length; i++) {
    if (tmp.indexOf(jogo[i]) == -1) {
      tmp.push(jogo[i]);
    }
  }
  return tmp;
}


console.log("\n..............................................................." +
  "\n\n   *** Sistema gerador de numeros aleatório Mega Sena ***  \n" +
  "............................................................... \n")
qtdJogos = parseInt(prompt("Por favor, queira informar a quantidade de jogos que deseja :"))


for (let i = 1; i < qtdJogos + 1; i++) {
  if (jogofinal(jogo).length <= 5) {
    i--
    var jogo = []
  } else
    console.log("\nJogo numero " + i +
      " - " + jogo +
      "\n")
  var jogo = []
}
