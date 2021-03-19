/*
    O call e o aply são duas formas diferentes de se executar uma função no JS.

    A diferença entre o call e o aply é a diferença entre como vc passa os
    parâmetros na hora de invocar esses dois métodos.
*/

global.preco = 20;
global.desc = 0.1;

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'NoteBook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco());
console.log(produto.getPreco());

// Usando o call e o aply
const carro = {
    preco: 15000,
    desc: 0.5
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

/* 
    No call, passamos diretamente nos parametros do call, cada um dos parametros
    que serão passados para a funcao. 
    - Primeiro sempre é o contexto

    Já no aply, passamos o primeiro parametro que é o contexto e em seguida passamos 
    os demeis parametros dentro de um array. 
*/
console.log(getPreco.call(carro, 0.7, '$'));
console.log(getPreco.apply(carro, [0.7, '$']));
console.log(getPreco.apply(global, [0.7, '$']));