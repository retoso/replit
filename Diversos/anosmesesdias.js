let totalDeDias = prompt("digite um numero.. ")

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;
//romavini: Excelente uso do mod (%)

qtdMeses = parseInt((totalDeDias % 365) / 30);
totalDeDias = ((totalDeDias % 365) % 30);

let resultado = (qtdAnos + " ano(s) " + '\n' +
  qtdMeses + " mes(es)" + '\n' +
  totalDeDias + " dia(s)");

console.log(resultado);

 var data = new Date();
// console.log(data)

// var dia = String(data.getDate()).padStart(2, '0');
// console.log(dia)

// var mes = String(data.getMonth() + 1).padStart(2, '0');
// console.log(mes)

// var ano = data.getFullYear();
// console.log(ano)

// dataAtual = dia + '/' + mes + '/' + ano;

// console.log(dataAtual);


// var dia95 = new Date('December 25, 1995 23:15:30');
// var day = dia95.getDate();

// console.log(day); // 25

console.log("data completa " + data)

var dia     = data.getDate();
console.log("dia - " + dia)

var dia_sem = data.getDay();
console.log("dia da semana - " + dia_sem)

var mes  = data.getMonth();
if (mes == 0) {
  mes == 1
} else if(mes == 1){
  mes == 2
} else if (mes == 2){
  mes == 3
} else if (mes == 3) {
  mes = 4
} else if (mes == 4) {
  mes = 5
} else if (mes == 5){
  mes = 6
}
  
console.log("mes - " + mes)

var ano2    = data.getYear();
console.log("Ano com 2 digitos - " + ano2)

var ano4    = data.getFullYear();
console.log("Ano com 4 digitos - " + ano4)

var hora    = data.getHours();
console.log("hora - " + hora)

var min     = data.getMinutes();
console.log("minuto - " + min)

var seg     = data.getSeconds(); 
console.log("segundos - "+ seg)

var mseg    = data.getMilliseconds();
console.log("MSegundos - " + mseg)

var tz      = data.getTimezoneOffset(); 
console.log(tz)