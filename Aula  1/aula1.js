// com duas barras voce pode fazer comentarios no java  
//console.log("Ola mundo da Java")
/* Agora eu consigo fazer
   varias linhas de comentarios.
*/
// variaeis
// var preco =prompt("Valor da Venda: ");
// var valorPago = prompt("Valor pago: ");
// var troco;

// valorPago = 300
// troco = valorPago - preco
// console.log(troco);
// console.log("O troco e de: " + (valorPago - preco))
// console.log("O troco e: "+ troco)
var precoProduto = prompt("Qual o preço......:");
var valorPago = prompt("Qual o valor pago.:");

precoProduto = parseFloat(precoProduto);
valorPago = parseFloat(valorPago);

//console.log(valorPago >= precoProduto)

if(valorPago == precoProduto){
  console.log("\n\n Não há troco, Volte Sempre!")
  } else if (valorPago > precoProduto) {
  console.log("O troco e de......:> " + (valorPago - precoProduto))
  } else {
  console.log("Esta faltando.....:> " + (precoProduto - valorPago))
  }