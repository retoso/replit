var l, c
agua = []
tabela = [
  ['~', '~', '*', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '*', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '*'],
];

function vitoria() {
  for (l = 0; l < tabela.length; l++) {
    console.log("linha - " + l)
    for (c = 0; c < tabela[l].length; c++) {
      if ((tabela[l][c] !== '~')) {
        if ((tabela[l][c] === '*')) {
          console.log("achei bomba " + tabela[l][c]);
        } else
          return console.log("achei navio " + tabela[l][c])
      } else
        console.log("achei agua " + tabela[l][c])
    }

    if (l === 4 && c === 5){
      console.log("!!!Parabens o Jogador XYZ ganhou !!! ")
    }
  }
}
vitoria()

module.exports = {
  "vitoriaExport": vitoria
}

