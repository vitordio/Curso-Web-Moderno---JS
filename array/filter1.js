/*
    Outra forma para percorrer um array com um propósito é o FILTER.

    Server para filtrar um array baseado em algum critério de filtro.

    Invés de usar o FOREACH para percorrer o array, fazer um teste
    condicioinal e adicionar em um novo array, podemos utilizar esse
    método muito mais simples para fazer isso.
*/
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad', preco: 4199, fragil: true},
    { nome: 'Copo de Plástico', preco: 10.00, fragil: false}
]

// Vamos passar um filter passando uma callback onde 'p' representa cada um dos produtos
console.log(produtos.filter(function(p) {
    // return false - nenhum elemento entra no filtro e nenhum vai pro novo array
    // return true - todos elementos entram no filtro e vão pro novo array
    // return p.preco > 2000 - apenas produtos com preco > 2000 vao pro novo array
}));

// Realizando filtro para filtrar apenas produtos caros e frageis
const apenasCaros = (obj) => obj.preco > 500;
const apenasFrageis = (obj) => obj.fragil;

const resultado = produtos.filter(apenasCaros).filter(apenasFrageis);
console.log(resultado);