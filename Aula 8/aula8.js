let quantosinteiro = parseInt(prompt('Informe quantos termos deseja da sequência'));
let arr = [];

function fibonace(x) {
    let a = 0;
    let b = 1;
    let c = 1;

    for (let i = 0; i < quantosinteiro; i++) {
        arr.push(c);
        c = a + b;
        a = b;
        b = c;

    }
}

console.log(arr)
