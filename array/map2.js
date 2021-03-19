const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços usando o MAP
// COMO EU RESOLVI
let valores = carrinho.map(function(e) {
    e = JSON.parse(e);
    let preco = parseFloat(e.preco).toFixed(2).replace(".", ",");

    return `R$ ${preco}`
})

console.log(valores);

// COMO O PROFESSOR RESOLVEU
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);