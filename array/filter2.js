Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}
// Criando nosso próprio método filter
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad', preco: 4199, fragil: true},
    { nome: 'Copo de Plástico', preco: 10.00, fragil: false}
]

// Realizando filtro para filtrar apenas produtos caros e frageis
const apenasCaros = (obj) => obj.preco > 500;
const apenasFrageis = (obj) => obj.fragil;

const resultado = produtos.filter(apenasCaros).filter2(apenasFrageis);
console.log(resultado);