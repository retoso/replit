let nome =prompt("Digite o nome .: ")
while(nome.length<3){
  console.log("nome invalido");
  nome =prompt("Digite o nome .: ")
          }
// let idade = parseInt(prompt("Digite a sua idade .: "))
while(idade>3 ||idade  ){
  console.log("nome invalido");
  nome =prompt("Digite o nome .: ")
// let salario =parseFloat(prompt("Digite o seu salario .: "))
// let sexo = (prompt("Digite o seu sexo  .: "))
// let civil = (prompt("Digite o seu estado civil  .: "))
// console.log (nome.length, idade, salario, sexo, civil) 


let valor1 = parseInt(prompt('Digite o valor 1 : '));
let valor2 = parseInt(prompt('Digite o valor 2 : '));
let valor3 = parseInt(prompt('Digite o valor 3 : '));
let valor4 = parseInt(prompt('Digite o valor 4 : '));
let valor5 = parseInt(prompt('Digite o valor 5 : '));
if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4 && valor1 < valor5){
  console.log ( ' o menor valor dentre eles é.:' + (valor1))
} else if (valor2 < valor3 && valor2 < valor4 && valor2 < valor5){
  console.log ( ' o menor valor dentre eles é.:' + (valor2))
} else if (valor3 < valor4 && valor3 < valor5 ){
  console.log ( ' o menor valor dentre eles é.:' + (valor3))
} else if (valor4 < valor5){
  console.log ( ' o menor valor dentre eles é.:' + (valor4))
} else {
  console.log ( ' o menor valor dentre eles é.:' + (valor5))
}