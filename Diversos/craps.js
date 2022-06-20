let jogo = true;
let tentativas = 1
var ganhou

function dados() {
  let dado1 = Math.floor(Math.random(1, 6) * 6) + 1;
  let dado2 = Math.floor(Math.random(1, 6) * 6) + 1;
  console.log("Jogada numero - " + tentativas);
  ganhou = dado1 + dado2;
  console.log("\nDado 1 .... = " + dado1 +
    "\nDado 2 .... = " + dado2 +
    "\n\nSoma total. = " + ganhou);
}

while (jogo) {
  console.clear()
  dados()

  if (tentativas == 1) {
    if (ganhou == 7 || ganhou == 11) {
      jogo = false
      console.log("Parabens voce ganhou com " + ganhou)

    } else if (ganhou == 2 || ganhou == 3 || ganhou == 12) {
      jogo = false
      console.log("'Craps'!!!! Que pena!! Voce perdeu..." + ganhou)

    } else {
      let continua = prompt("Voce fez " + ganhou + " !! proxima jogada ? (s)sim ou (n)não : ")
      if (continua == "n") {
        jogo = false;
      } else
        tentativas++
        var proximaJogada = ganhou
        dado1=""
        dado2=""
        ganhou=""
    }
  }
  if (tentativas > 1) {
    if (ganhou === 7) {
      console.log(" Que pena!! Voce perdeu..." + ganhou)
      jogo = false
    } 
    if (ganhou == proximaJogada) {
      console.log("Com "+tentativas+" voce acertou..." +ganhou)
        }
  }
}
