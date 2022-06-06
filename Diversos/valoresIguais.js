var resultado = []
while(resultado.length < 2){
let a = (prompt(" - Por favor, queira informar o valor : " ))
if (!isNaN(a)) resultado.push(a)
}
var min = Math.min(...resultado); // criando uma variavel com valor minimo da array
var max = Math.max(...resultado); // criando uma variavel com valo maximo da array
if (min==max){
  console.log(" " + min + " e " + max + " - Sao valores iguais.")
  } else {
  console.log(" " + min + " e " + max + "  - Nao sao valores iguais.")
  }
