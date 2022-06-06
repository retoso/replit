var a = 0;
var b = 0;
var c = 0;
var d = 0;
var nulo = 0;
var branco = 0; 

for (v = 1; v <=6; v++) {
console.log ("\n\n    ### Eleições para Vereador em 2022 ### " + 
             "\n\n Eleitor : " + v +
             "\n Selecione uma opção abaixo:" +
             "\n 1 - Canditado A" +
             "\n 2 - Canditado B" +
             "\n 3 - Canditado C" +
             "\n 4 - Canditado D" +
             "\n 5 - Voto Nulo" +
             "\n 6 - Voto em Branco") 
let op = parseInt(prompt('Opção : '))
var  check = true
while (check) { 
  if (op == 1) {
    a++
    check = false
    console.clear()
    } else if (op == 2) {
    b++
    check = false
    console.clear()
    } else if (op == 3) {
    c++
    check = false
    console.clear()
    } else if (op == 4) {
    d++
    check = false
    console.clear()
    } else if (op == 5) {
    nulo++    
    check = false
    console.clear()
    } else if ( op==6 ) {
    branco++
    check = false 
    console.clear()
  } else check = true
  }
  } 
var p
console.clear()
console.log ("\n\n    ### RESULTADO ### " + 
             "\n 1 - Canditado A " + a + " voto(s) % " + Math.round(p=(a * 100) / 6) +
             "\n 2 - Canditado B " + b + " voto(s) % " + Math.round(p=(b * 100) / 6) +
             "\n 3 - Canditado C " + c + " voto(s) % " + Math.round(p=(c * 100) / 6) +
             "\n 4 - Canditado D " + d + " voto(s) % " + Math.round(p=(d * 100) / 6) +
             "\n 5 - Nulo        " + nulo + " voto(s) % " + Math.round(p=(nulo * 100) / 6) +
             "\n 6 - Em Branco   " + branco + " voto(s) % " + Math.round(p=(branco * 100) / 6))

let ganhou = [a,b,c,d]


if (a > b && a > c && a > d){
  console.log ("\n  Parabens Candidato A, voce ganhou!")
  } else if (b > a && b > c && b > d) {
  console.log ("\n  Parabens Candidato B, voce ganhou!")
  } else if (c > a && c > b && c > d) {
  console.log ("\n  Parabens Candidato C, voce ganhou!")
  } else if (d > a && d > b && d > c) {
  console.log ("\n  Parabens Candidato D, voce ganhou!")
  } else if (a == b && a == c && a == d ) {
  console.log ("\n Parabens a todos, voces foram eleitos para segundo turno !")
  } else if (a == b ) {
  console.log ("\n Parabens aos candidatos A e B, voces foram eleitos para segundo turno !")
  } else if (a == c  ) {
    console.log ("\n Parabens aos candidatos A e C, voces foram eleitos para segundo turno !")
  } else if (a == d ) {
  console.log ("\n Parabens aos candidatos A e D, voces foram eleitos para segundo turno !")
  } else if (b == c) {
    console.log ("\n Parabens aos candidatos B e C, voces foram eleitos para segundo turno !")
  } else if (b == d) {
    console.log ("\n Parabens aos candidatos B e D, voces foram eleitos para segundo turno !")
  } else if (c == d) {
    console.log ("\n Parabens aos candidatos C e D, voces foram eleitos para segundo turno !")
  } else console.log ("\n Parabens a todos, voces foram eleitos para segundo turno !")