
var resultado = []
while(resultado.length < 1){
let a = (prompt(" - Por favor, queira informar o valor : " ))
if (!isNaN(a)) resultado.push(a)
}

if (resultado % 2 == 0);{ 
  console.log( resultado + " Este numero e par!")  
} else { 
 console.log( resultado + " Este numero e impar!")  
}


// modelo dois com FOR


for (let i = 1; i <= 20; i++){
  if (i % 2 == 0){
    console.log( i + " Este numero e par!")
    } else { console.log( i + " Este numero e impar!")
            }
  }
