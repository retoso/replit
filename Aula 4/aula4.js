/* Laços de repetição
FOR - a estrutura FOR e destinada para repetir uma tarefa em um determinado numero de vezes,
como na estrutura abaixo
*/

// for (let i=1; i<=10; i++) {
//   console.log("ola, pela " + i + "a vez!");
// };

/* Enquanto
WHILE - esta estrutura e designada para tarefas que serao repetida um numero indeterminado d
vezes, ate uma condição especificada se torne flsa.
*/

// let a=0;
// let b=1;
// while (a + b < 100) {
//   let c = b;
//   b = a + b
//   a = c;
//   console.log("lavor a: ", a);
//   console.log("lavor b: ", b);
//   console.log("lavor c: ", c);
// }

/*

1 - palpite
1.1 - sim = parabens
1.2 - nao = segredo
2 - segredo
2.1 - sim = "menos!"
2.2 - nao = "mais!"
2.3 - volta
*/
let segredo = Math.floor(Math.random() * 100);
let jogo = true;
let tentativas = 1
while (jogo) {
  let palpite = parseInt(prompt("Digite o seu palpite.: "));
  if (palpite == segredo) {
    console.log("Parabens")
    jogo = false
  } else if (palpite > segredo) {
    console.log("Menos")
  } else {
    console.log("Mais")
    }
  }


