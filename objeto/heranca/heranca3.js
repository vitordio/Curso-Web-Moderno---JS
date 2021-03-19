const pai = { nome: 'Pedro', corCabelo: 'Preto' }

// criando um objeto filho a partir do Object.create passando o pai como prototipo
const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.nome, filha1.corCabelo);

// criando outro objeto filho e passando como 2 parametro um objeto com os atributos e especificacoes do filha2
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla'; // não irá ser sobrescrito por conta do 'writable'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

/*
    Imprimindo todos os atributos com o for in.
    Usando o for in, todos os atributos da filha quanto do pai serão impressos.

    Usando o hasOwnProperty verificamos se a propriedade apresentada pertence ao
    próprio Objeto ou se pertence ao ObjetoPai (veio por herança)
*/
for(let key in filha2) {
    // console.log(key);
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}