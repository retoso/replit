function tiposNavio() {
  let verLogica = require ("./logicaDeVisualizacao.js");
  verLogica.apresentaLogica()
}

function apresentacao() {
  console.log("\n         ..................................." +
    "\n           ### Jogo de Batalha Naval ####" +
    "\n         ..................................." +
    "\n         Jogo de tabuleiro de dois jogadores" +
    "\nSeu objectivo é derrubar os barcos do oponente adversário," +
    "\nganha quem derrubar todos os navios adversários primeiro." +
    "\n")
  console.log("!! Vamos Jogar !!\n")
  console.log("Qualquer caracter = sim")
  let jogar = prompt("Ou so enter para nao - ")
  if (!jogar == "") {
    console.clear()
    tiposNavio()
  } else console.log(" \n!! Que pena !!")
}

function iniciaJogo() {
  apresentacao()
}
// modulo de chamada para o index.js
module.exports = {
  "exportadorIniciaJogo": iniciaJogo
}
