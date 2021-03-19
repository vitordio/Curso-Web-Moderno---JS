// ES8: Object.values - pega os valores do objeto
// ES8: Object.entries - pega os pares chave-valor do objeto e coloca cada um em uma posicao de um array
const obj = { a: 1, b:2, c: 3}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá, pessoal!'
    }
}
console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar());