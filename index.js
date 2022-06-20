sena// let salario = 1000
// let bonus = true
// let salarioFinal=(bonus)? salario*1.1:salario
// console.log(salarioFinal)

let apoio = parseFloat (prompt("Valor de apoio: "))
switch (apoio) {
  case 1000:
    console.log("Livro Fisico");
  case 500:
    console.log("livro digital");
  case 100:
    console.log("Cartela de adesivos")
  default:
    console.log("Valor invalido")
}