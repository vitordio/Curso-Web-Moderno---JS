// Função e o atributo 'prototype' da Função
function MeuObjeto() {}
console.log(MeuObjeto.prototype);


// Todos os objetos criados a partir de uma função consturtora apontam para o mesmo protótipo
const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);

// Quando criamos um objeto a partir de uma função construtora usando o new o prototipo desse objeto será igual o da função
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar();

obj2.nome = 'Vitor';
obj2.falar();

const obj3 = {
    __proto__: MeuObjeto.prototype
}

console.log(MeuObjeto.prototype === obj3.__proto__);
obj3.nome = 'Rafael';
obj3.falar();

// Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);