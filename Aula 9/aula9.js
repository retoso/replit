function Invert(vetor){
  let vetorInvertido = []
    for (let i = 1; i <= vetor.length; i++) {
    vetorInvertido.push(vetor[vetor.length -i])
    }
  return vetorInvertido
  }
let teste = [1,23,44,5,6,7,88,2]
let a = Invert(teste)
console.log(teste)
console.log(a)