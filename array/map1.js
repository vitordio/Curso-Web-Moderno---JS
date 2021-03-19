/*
    Método MAP - é um FOR com propósito. Percorre o array e serve para fazer uma transformação no array.
    A ideia é mapear um array para um outro array do mesmo tamanho só que com os dados transformados.

    Podemos ter um MAP por exemplo que pega um objeto e transforma em um número.

    A regra é que se um array original tem 6 elementos, o array gerado pelo MAP terá 6 elementos só que com os dados transformados.

    o MAP 
*/
const nums = [1, 2, 3, 4, 5];

// Geraremos um array com o MAP onde todos os valores serão o dobro do original
// Passamos uma callback que pode receber 3 valores, o proprio valor atual do laço, o indice e o array completo
let resultado = nums.map(function(e) { // passei só o elemento atual
    return e * 2;
})

console.log(resultado);

// ----------------- OUTRO EXEMPLO -----------------//
// Criamos uma função que será passada para o MAP
const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
