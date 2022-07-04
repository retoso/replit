let tabuleiro = []
var escolhaNavio

function posicionar() {
  let posicionar = require("./posicionarEmbarcacoes.js");
  posicionar.posicionamento();
}


function logicaVisualizacao() {
  let tabuleiro = []
  for (let i = 0; i < 5; i++) {
    tabuleiro.push([])
    for (let j = 0; j < 5; j++) {
      tabuleiro[i].push("~")
    }
  }
  console.log("     Água          = ~ ")
  console.log(" 1 - Navio pequeno = <> ")
  console.log("               = n")
  console.log("               = v ")
  console.log(" 2 - Navio Médio   = <=> ")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log(" 3 - Navio Grande  = <==> ")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log("     Bomba         = # \n")

escolhaNavio = prompt("Escolha o tipo de navio ")

let check = true
  
while (check){
if (escolhaNavio == 1 || escolhaNavio == 2 || escolhaNavio == 3){
  escolhaNavio = escolhaNavio
  check = false
   posicionar()
} else
  escolhaNavio = prompt("Escolha o tipo de navio 1, 2 ou 3 ")
  }
}

function posicionar() {
  let posicionar = require("./posicionarEmbarcacoes.js");
  posicionar.posicionamento();
}


///modudo de exportacao///
module.exports = {
  "apresentaLogica": logicaVisualizacao ()
}


