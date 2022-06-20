// exemplo 1
// for (let i = 1; i <= 100; i++){
//   if (i % 3 == 0 && i % 5 == 0){
//     console.log("FizzBuzz")
//   } else if (i % 3 == 0){
//     console.log("Fizz")
//   } else if (i % 5 == 0){
//     console.log("Buzz")
//   } else 
//     console.log(i)
//   }

// exemplo 2

// for (let i = 1; i <= 100; i++){
//   if (i % 15 == 0){
//     console.log("FizzBuzz")
//   } else if (i % 3 == 0){
//     console.log("Fizz")
//   } else if (i % 5 == 0){
//     console.log("Buzz")
//   } else 
//     console.log(i)
//   }

// exemplo 3
for (let i = 1; i <= 100; i++){
  let texto = ""
  if (i % 3 == 0){
    texto = texto += ("Fizz")
  }
  if (i % 5 == 0){
    texto = texto += ("Buzz")
  }
  if (texto == ""){
    console.log(i)
  } else console.log(texto)
}
