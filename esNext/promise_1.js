let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Vitor', 'Bia', 'Ana'])
})

console.log(typeof p);
console.log(p);

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

// then é um metodo que tbm ira receber uma funcao por parametro
// o valor que será passado no param é exatamente o valor que foi cumprido, valro que foi passado na chamada da função dentro da promise
// p
//     .then(valor => valor[0])
//     .then(primerio => primerio[0])
//     .then(letra => letra.toLowerCase())
//     .then(minuscula => console.log(minuscula))

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula )
    .then(valor => console.log(valor))