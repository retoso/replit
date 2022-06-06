// /*
// 1  - que turma voce estuda? (m-manha, t-tarde, n-noite)
//   1.1 recebe valor turma

// 2 - responder
//   2.1 valor a > b? and a> c
//   2.2 valor b > a? and b > c
//   2.3 c
// */








// // let a = parseFloat(prompt("Digite o valor A.: "));
// // let b = parseFloat(prompt("Digite o valor B.: "));
// // let c = parseFloat(prompt("Digite o valor C.: "));
// // if (a > b & a > c) {
// //   console.log("O maior valor e a: ", a);
// //  } else if (b > a & b > c) {
// //   console.log("O maior valor e b: ", b);
// //  } else {
// //   console.log("O maior valor e c: ", c);
// // }


// console.log("Ola, Por favor queira informar em que turma voce estuda: ");
// console.log("     Responsa 1 - Manha");
// console.log("     Responda 2 - Tarde");
// console.log("     Responsa 3 - Noite");

// let a = parseInt(prompt("Digite o valor .: "))
// let turma = true;
// while (turma) {
//   if (a == 1) {
//     console.log("   Bom dia!")
//     turma = false
//   } else if (a == 2) {
//     console.log("   Boa tarde!")
//     turma = false
//   } else if (a == 3) {
//     console.log("   Boa noite!")
//     turma = false
//   } else {
//      a = parseInt(prompt("Digite um valor valido .: "))
//   }
// }



console.log("Ola, tudo bem! Por favor, queira informar em que turma voce estuda: ");
console.log("     Responsa 1 - Manha");
console.log("     Responda 2 - Tarde");
console.log("     Responsa 3 - Noite");

let a = parseInt(prompt("Digite o valor .: "))
let turma = true;
while (turma) {
  if (a == 1) {
    console.log("     Bom dia!, voce esta estudando na turma da manha.")
    turma = false
  } else if (a == 2) {
    console.log("     Boa tarde!, voce esta estudando na turma da tarde.")
    turma = false
  } else if (a == 3) {
    console.log("     Boa noite!, voce esta estudando na turma da noite.")
    turma = false
  } else {
     a = parseInt(prompt("Digite um valor valido .: "))
  }
}

