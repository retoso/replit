// by Renato Tonelli - 05/05/2022


console.log("\n..............................................................." +
  "\n   *** Sistema de calculo para pagamento de funcionários ***  \n" +
  "............................................................... \n" +
  "\n\n Por favor, queira seguir o passo a passo conforme abaixo: \n" +
  "\n  - Nome do funcionário." +
  "\n  - Anos na empresa." +
  "\n  - Idade." +
  "\n  - Cargo." +
  "\n\n" )

var nome //  Nome do funcionário -----------------------
    nome = prompt('Nome do funcionário......: ');   //  Nome do funcionário.
    while(nome.length<3){
    console.log("Nome invalido");
    nome =prompt("Qual e o nome do funcionario.: ")
            }

var anos //  Tempo de serviço do funcionario ------------
    anos = parseInt(prompt('Tempo de trabalho........: ')); 

var ck = true  // Valida se e numeros
while (ck) {
  if (isNaN(anos)) {
     anos = parseInt(prompt("Digite somente numeros...: "))
     ck = true
    } else ck = false
  }
var ck_0 = true  // Valida o tempo maximo para calculo de trabalho
while (ck_0) {
  if (anos>30){
    anos = parseInt(prompt("Tempo maximo para calculos 30 anos..: ")) 
    ck_0 = true
  } else ck_0 = false
}

var idade // Qual a idade do funcionario.................
    idade = parseInt(prompt('Qual a idade ?...........: '));

var ck1 = true
while (ck1) {
  if (isNaN(idade)) {
     idade = parseInt(prompt("Digite somente numeros...: "))
     ck1 = true
    } else ck1 = false
  }  

var cargp // Qual e o cargo do funcionario ---------------
console.log("\n\    ### Escolha um cargo ### " +   // Definir o cargo
      "\n 1 - Gerente" +
      "\n 2 - Vendedor" +
      "\n 3 - Tesoureiro" +
      "\n 4 - Desenvolvedor")
    let op = parseInt(prompt('Opção : '))

var ck2 = true
while (ck2) {
  if (isNaN(op)) {
     op = parseInt(prompt("Digite somente numeros....: "))
     ck1 = true
    } else ck2 = false
  }

let check = true
    while (check) {
      if (op == 1) {
        cargo = "Gerente"
        check = false
      } else if (op == 2) {
        cargo = "Vendedor"
        check = false
      } else if (op == 3) {
        cargo = "Tesoureiro"
        check = false
      } else if (op == 4) {
        cargo = "Desenvolvedor"
        check = false
      } else {
        console.log("\n\n Escolha uma opção valida!!! 1, 2, 3, 4: ")
        op = parseInt(prompt('Opção : '))
      }
    }

// Saida final -----------------------------------------------------------

if (cargo == "Gerente"){
  var salarioG = 4800.00
  var salarioFinal 
  Math.round(salarioFinal= salarioG * (anos / 70 + 1))
}
if (cargo == "Vendedor"){
  var salarioV = 2900.00
  Math.round(salarioFinal= salarioV * (anos * 3 / 50 + 1))
} 
if (cargo == "Tesoureiro"){
  var salarioT = 3200.00
  Math.round(salarioFinal= salarioT * (anos / 10 + 1.2))
  } 

if (cargo == "Desenvolvedor"){
    var salarioD = 5100.00
Math.round(salarioFinal= salarioD * (anos ** 2 / 120 + 1))
}


console.log("\n" )

let final = [
  {
    Nome: (nome).toUpperCase(),
    Tempo_Casa: (anos),
    Idade: (idade),
    Cargo: (cargo).toUpperCase(),
    Salario_Final: (salarioFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })),
    }
]
console.table(final)
