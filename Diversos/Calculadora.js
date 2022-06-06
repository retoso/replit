
  function Soma(a,b) {
  let soma = ( a + b)
  return soma;
  }
function Sub(a,b) {
  let sub = ( a - b)
  return sub;
  }
function Mult(a,b) {
  let mult = ( a * b)
  return mult;
  }
function Div(a,b) {
  let div = ( a / b)
  return div;
  }

console.log ("    ### Calculadora ### " + 
             "\n Selecione uma opção abaixo:" +
             "\n 1 - Soma." +
             "\n 2 - Subtração." +
             "\n 3 - Multiplicação." +
             "\n 4 - Divisão." +
             "\n 5 - Sair." ) 
let op = parseInt(prompt('Opção : '))
var  check = true

while (check) { 
  if (op == 1) {
    let a = parseFloat(prompt('Divite o Primeiro Valor : '));
    let b = parseFloat(prompt('Divite o Segundo Valor : '));
    console.log("\n\n O resultado e: " + Soma(a,b))
    check = false
    } else if (op == 2) {
    let a = parseFloat(prompt('Divite o Primeiro Valor : '));
    let b = parseFloat(prompt('Divite o Segundo Valor : '));
    console.log("\n\n O resultado e: " + Sub(a,b))
    check = false
    } else if (op == 3) {
    let a = parseFloat(prompt('Divite o Primeiro Valor : '));
    let b = parseFloat(prompt('Divite o Segundo Valor : '));
    console.log("\n\n O resultado e: " + Mult(a,b))
    check = false
    } else if (op == 4) {
    let a = parseFloat(prompt('Divite o Primeiro Valor : '));
    let b = parseFloat(prompt('Divite o Segundo Valor : '));
    console.log("\n\n O resultado e: " + Div(a,b))
    check = false
    } else if (op == 5) {
    console.log("\n\n Volte Sempre!!!: ")
    check = false
    } else {
    console.log("\n\n Escolha uma opção valida!!!: ")
     op = parseInt(prompt('Opção : '))
    } 
}




// function Soma(a,b) {
//   let soma = ( a + b)
//   return soma;
//   }
// function Sub(a,b) {
//   let sub = ( a - b)
//   return sub;
//   }
// function Mult(a,b) {
//   let mult = ( a * b)
//   return mult;
//   }
// function Div(a,b) {
//   let div = ( a / b)
//   return div;
//   }

// console.log ("    ### Calculadora ### " + 
//              "\n Selecione uma opção abaixo:" +
//              "\n 1 - Soma." +
//              "\n 2 - Subtração." +
//              "\n 3 - Multiplicação." +
//              "\n 4 - Divisão." +
//              "\n 5 - Sair." ) 
// let op = parseInt(prompt('Opção : '))
// var  check = true

// while (check) { 
//   if (op == 1) {
//     let a = parseFloat(prompt('Divite o Primeiro Valor : '));
//     let b = parseFloat(prompt('Divite o Segundo Valor : '));
//     console.log("\n\n O resultado e: " + Soma(a,b))
//     check = false
//     } else if (op == 2) {
//     let a = parseFloat(prompt('Divite o Primeiro Valor : '));
//     let b = parseFloat(prompt('Divite o Segundo Valor : '));
//     console.log("\n\n O resultado e: " + Sub(a,b))
//     check = false
//     } else if (op == 3) {
//     let a = parseFloat(prompt('Divite o Primeiro Valor : '));
//     let b = parseFloat(prompt('Divite o Segundo Valor : '));
//     console.log("\n\n O resultado e: " + Mult(a,b))
//     check = false
//     } else if (op == 4) {
//     let a = parseFloat(prompt('Divite o Primeiro Valor : '));
//     let b = parseFloat(prompt('Divite o Segundo Valor : '));
//     console.log("\n\n O resultado e: " + Div(a,b))
//     check = false
//     } else if (op == 5) {
//     console.log("\n\n Volte Sempre!!!: ")
//     check = false
//     } else {
//     console.log("\n\n Escolha uma opção valida!!!: ")
//      op = parseInt(prompt('Opção : '))
//     } 
// }