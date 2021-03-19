/* 
    Ao darmos console.log nos objetos, apenas os atributos declarados neles serão apresnetados,
    porém conseguimos chamar da mesma forma os atributos do pai.
*/

// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A',
}

const pai = {
    __proto__: avo,
    attr2: 'B',
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

Object.prototype.attr0 = 'Z'; // não fazer isso - não é recomendado
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0);

// Outro exemplo para definição de protótipos
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // chamamos de SHADOWING (sombreamento) quando um atributo do filho sombreia o do pai
}

const volvo = {
    modelo: 'V40',
    status() {
        // Usamos o super para referenciar o protótipo
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo a relação de protótipo usando o SetProtoypeOf
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro)

console.log(carro);
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());