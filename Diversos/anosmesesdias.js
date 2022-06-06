let totalDeDias = prompt("digite um numero.. ")

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;
//romavini: Excelente uso do mod (%)

qtdMeses = parseInt((totalDeDias % 365) / 30);
totalDeDias = ((totalDeDias % 365) % 30);

let resultado = (qtdAnos + " ano(s) " + '\n' +
  qtdMeses + " mes(es)" + '\n' +
  totalDeDias + " dia(s)");

console.log(resultado);