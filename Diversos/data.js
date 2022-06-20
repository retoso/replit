var data = new Date();
console.log(data)

var dia = String(data.getDate()).padStart(2, '0');
console.log(dia)

var mes = String(data.getMonth() + 1).padStart(2, '0');
console.log(mes)

var ano = data.getFullYear();
console.log(ano)

dataAtual = dia + '/' + mes + '/' + ano;

console.log(dataAtual);


var Xmas95 = new Date('December 25, 1995 23:15:30');
var day = Xmas95.getDate();

console.log(day); // 25
