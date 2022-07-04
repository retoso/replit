var jogador1 = false
var jogador2 = false
let num = 1
var linha = ""
var coluna = ""
var verticalHorizontal
tabela = [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];
tabelajogador1 = [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '*', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];
tabelajogador2 = [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];

var jogada = 0


function posicionar() { //posicionar o navio
  var a = true
  var l, c, vh;

  while (a) {
    var l, c, vh;
    var ckvh = true

    while (ckvh) {
      console.log("\n Como deseja posicionar o navio :")
      console.log("\n h ou H = Horizontal")
      console.log("\n v / V = Vertical\n")
      verticalHorizontal = prompt(" Posicionar o Navio na V-ertical ou H-orizontal")
      if (verticalHorizontal == "h" || verticalHorizontal == "H" || verticalHorizontal == "v" || verticalHorizontal == "V") {
        verticalHorizontal = verticalHorizontal
        ckvh = false
      } else {
        verticalHorizontal = prompt(" O Navio ira ficar na V-ertical ou H-orizontal")
        ckvh = true
      }
    }

    linha = prompt(" linha  0, 1, 2, 3, ou 4:-");
    var ckh = true //valida as opcoes de entrada na linha
    while (ckh) {
      if (linha == "0" || linha == "1" || linha == "2" || linha == "3" || linha == "4") {
        linha = linha
        ckh = false
      } else {
        linha = prompt(" Opcao errada - linha   0, 1, 2, 3, ou 4: ");
        ckh = true
      }
    }
    coluna = prompt(" coluna 0, 1, 2, 3, ou 4:-");
    var ckv = true //valida as opcoes de entrada na coluna
    while (ckv) {
      if (coluna == "0" || coluna == "1" || coluna == "2" || coluna == "3" || coluna == "4") {
        coluna = coluna
        ckv = false
      } else {
        coluna = prompt(" Opcao errada - linha  0, 1, 2, 3, ou 4: ");
        ckv = true
      }
    }
    if (tabela[linha][coluna] == '~') {
      tabelajogador1[linha][coluna] = "X"
      a = false
      jogada++
    } else
      a = true
    jogada--

  }
}


/// inicio de jogo ///

var check = true

while (check) {
  console.table(tabela)
  console.log(" Jogador " + num + " eccolha as coordenadas ")
  posicionar()

}

///modulo de chamada ///
module.exports = {
  "posicionar": posicionamento
}