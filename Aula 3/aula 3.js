// const dias = 365 //definindo uma variavel absoluta..
// console.log(dias)
// {
//   let cartao = "37641234567890"
//   console.log(cartao)
//   // aqui dentro tudo que for sensivel
// }

let passo;
var passo;
for (let passo = 0; passo < 9; passo++) {
  console.log("Mais um passo para futuro");
};

for (passo = 15; passo > 0; passo--) {
  console.log("De mais um passo" );
  console.log("Faltam " + passo + " passos " );
};

let nota1 = parseFloat(prompt('Digite a nota 1 : '));
let nota2 = parseFloat(prompt('Digite a nota 2 : '));
let nota3 = parseFloat(prompt('Digite a nota 3 : '));
let nota4 = parseFloat(prompt('Digite a nota 4 : '));
console.log ('Sua media e.......: ' + (nota1 + nota2 + nota3 + nota4) / 4);



let peso = parseFloat(prompt("Digite o peso....: "))
if (peso > 50) {
  console.log('Voce excedeu o peso maximo estabelecido em ' + (peso - 50));
  console.log('Portanto a multa sera de R$ ' + (peso - 50) * 4.0 )
} else {
  console.log('Parabens!!!  Voce esta dentro do regulamento')
}
  