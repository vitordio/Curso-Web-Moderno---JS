/*
    Funções Factorys são funções que retornam um objeto.

    Factory = Fabrica. Tem a função de 'fabricar' um objeto.
*/

//  Factory Simples
function criarPessoa() {
    return {
        nome: 'Vitor',
        idade: 20
    }
}

console.log(criarPessoa());

// Factory com Parâmetros
function criarProduto(nomeProduto = 'Produto 1', precoProduto = 150) {
    return {
        nome: nomeProduto,
        preco: precoProduto
    }
}

console.log(criarProduto());
console.log(criarProduto('Bola', 20));