   var CalculoIMC = function (peso, altura) {
      var imc = peso / (altura * altura);
      return Math.round(imc * 100) / 100;
   };

   var CalculoIMC_Obesidade = function (peso, altura) {
      var imcObesidade = 35 - (peso / (altura * altura));
      return Math.round(imcObesidade * 100) / 100;
   };

   var CalculoIMC_Magreza = function (peso, altura) {
      var imcMagreza = (peso / (altura * altura)) - 18;
      return Math.round(imcMagreza * 100) / 100;
   };

   var peso = prompt("Qual é o seu Peso?");
   var altura = prompt("Qual é a sua altura?");   

   console.log("Peso: " + peso + " " + "Altura: " + altura); // 78 ... 1.75


   // Forma 1:
   console.log("Meu IMC é: " + CalculoIMC(peso, altura)); // 25.47
   console.log("Estou distante da Obesidade: " + CalculoIMC_Obesidade(peso, altura)); // 9.53
   console.log("Estou distante da Magreza: " + CalculoIMC_Magreza(peso, altura)); // 7.47


   // Forma 2:
   var MeuIMC = CalculoIMC(peso, altura);
   var DiffObesidade = 35 - MeuIMC;
   var DiffMagreza = MeuIMC - 18;

  console.log("Meu IMC é: " + MeuIMC); // 25.47
  console.log("Estou distante da Obesidade: " + DiffObesidade); // 9.530000000000001
  console.log("Estou distante da Magreza: " + DiffMagreza); // 7.469999999999999


