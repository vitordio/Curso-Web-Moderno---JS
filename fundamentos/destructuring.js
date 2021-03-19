/*
 *
    Operador de Desestruturação
    Usado para extrair de determinado objeto seus atributos - {}
    Usado para extrair de determinado array seus elementos - []
 *
 */

const pessoa = {
    nome : 'Vitor Dio',
    idade : 19,
    endereco : {
        logradouro : 'Teste',
        numero: '123'
    }
}

/* Usamos dentro das chaves o que queremos pegar dentro do objeto e depois do = o objeto que queremos
   O que está querendo dizer é: tire de dentro do objeto pessoa os atributos nome e idade */
const { nome, idade } = pessoa; 
console.log(nome, idade);

const { endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero);

// Para remover alterando o nome da variável basta fazer:
const { nome: nome1, idade: idade1 } = pessoa
console.log(nome1, idade1);

/*
    Utilizando o destructuring na função
    No exemplo abaixo, criamos o objeto com dois atributos e para não ter que usar obj.min e obj.max,
    utilizamos o destructuring para acessar diretamente o min e o max
*/

function random({ min, max }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {
    min : 10,
    max : 1000
}

console.log(random(obj));

/* O mesmo exemplo agora invés de objeto, utilizamos Array */

function rand([min, max]) {
    //inverta se min > max
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([100,40]));
