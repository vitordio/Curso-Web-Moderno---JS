/*
 *
 Templates String são usados também para facilitar a concatenação de Strings,
 para que quando haja muita concatenação, o código não fique feio
 *
 */

const nome = 'Vitor';
const concatenacao = 'Olá ' + nome;

const template = `Olá ${nome}!`;

console.log(concatenacao, template); // As duas formas exibem o mesmo resultado

// Podemos usar também as expressões matemáticas
console.log(`1 + 1 = ${1+1}`);

// Ou até, usar em funções
const up = texto => texto.toUpperCase();
console.log(`Eii... ${up('cuidado')}`);