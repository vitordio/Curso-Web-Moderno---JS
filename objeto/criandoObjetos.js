// Usando a notação literal - {}
const obj1  = {};

// Object em JS
const obj2 = new Object;

// Funções Construtoras
function Produto(nome, preco, desc) {
    /* Reparar que preco e desc ficaram encapsulados dentro do objeto, ou seja,
       não estão visíveis para fora. Já o nome, como chamamos com o this, está visível para fora
    */
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}
// Se acessarmos p1.nome, ficará disponivel para alteração, os demais atributos não.
const p1 = new Produto('Caneta', 7.99, 0.15);
console.log(p1.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Vitor', 3000, 10);
console.log(f1, f1.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Vitor';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJson = JSON.parse('{"info" : "Sou um JSON"}');
console.log(fromJson.info);
 