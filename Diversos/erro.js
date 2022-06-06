// by Renato Tonelli - 05/05/2022
var ck = true
var resultado = []
while (ck) {
  for (var i = 1; i <=3; i++) {
   let a = parseFloat(prompt(i + " - Por favor, queira informar o valor : " ))
    if (isNaN(a)) {
      a = (parseFloat(prompt(i + " - Somente numeros, queira informar o valor : " )))
      i--
      } else ck = false
     resultado = a.push
    }

}

  // console.log('i - ' + i)
  // //console.log("a - " + a)
  // console.log("ck - " + ck)
  console.log("resultado - " + resultado)
var min = Math.min(...resultado); // criando uma variavel com valor minimo da array
var max = Math.max(...resultado); // criando uma variavel com valo maximo da array
resultado.sort() // ordenando a array


console.log("\n" )

let final = [
  {

    Valores_ordenados: (resultado.sort()),
    Menor_valor: (min),
    Maior_valor: (max),
    }
]
console.table(final)

  console.log('i - ' + i)
  console.log("a - " + a)
  console.log("ck - " + ck)
  console.log("resultado - " + resultado)



   //let resultado a = resultado.push(parseFloat(prompt(i + " - Por favor, queira informar o valor : " )))