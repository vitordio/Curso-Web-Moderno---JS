// Armazenando uma função em uma variável
const soma = function (a, b) {
    console.log(a + b);
}

soma(1,2);

// Funções arrow - armazenando em uma variável
const imprimirSoma = (a,b) => {
    return a + b;
}

console.log(imprimirSoma(1, 2));

// Simplificando mais ainda com uma função arrow de retorno implicito
const subtrair = (a,b) => a-b;
console.log(subtrair(1,2));

