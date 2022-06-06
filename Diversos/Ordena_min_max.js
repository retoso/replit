let a = parseFloat(prompt("Por favor, queira informar o valor de a: " ))
var ck = true  // Valida entrada do numero na variavel a
while (ck) {
  if (isNaN(a)) {
     a = parseInt(prompt("Digite somente numeros...: "))
     ck = true
    } else ck = false
  }
let b = parseFloat(prompt("Por favor, queira informar o valor de b: " ))
var ck1 = true  // Valida entrada do numero na variavel b
while (ck1) {
  if (isNaN(b)) {
     b = parseInt(prompt("Digite somente numeros...: "))
     ck1 = true
    } else ck1= false
  }
let c = parseFloat(prompt("Por favor, queira informar o valor de c: " ))
var ck2= true  // Valida entrada do numero na variavel c
while (ck2) {
  if (isNaN(c)) {
     c = parseInt(prompt("Digite somente numeros...: "))
     ck2 = true
    } else ck2 = false
  }
var valida =  [a,b,c] //  criando uma array com os valores de entrada
var min = Math.min(...valida); // criando uma variavel com valor minimo da array
var max = Math.max(...valida); // criando uma variavel com valo maximo da array
valida.sort() // ordenando a array
let final = [
  {
    Valores_na_entrada: [a,b,c],
    Valores_ordenados: (valida.sort()),
    Menor_valor: (min),
    Maior_valor: (max),
    }
]
console.table(final) // by Renato Tonelli - 05/05/2022


// var resultado = []
// while(resultado.length < 3){
// let a = (prompt(" - Por favor, queira informar o valor : " ))
// if (!isNaN(a)) resultado.push(a)
// }
// var min = Math.min(...resultado); // criando uma variavel com valor minimo da array
// var max = Math.max(...resultado); // criando uma variavel com valo maximo da array
// resultado.sort(parseInt) // ordenando a array
// let final = [
//   {
//     Valores_ordenados: (resultado.sort()),
//     Menor_valor: (min),
//     Maior_valor: (max),
//     }
// ]
// console.table(final) // by Renato Tonelli - 06/05/2022