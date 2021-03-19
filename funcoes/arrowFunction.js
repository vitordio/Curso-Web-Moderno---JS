/*
    Um dos principais objetivos para introdução do novo tipo de função, o arrow function, são:
    - tem uma sintaxe mais curta
    - o fato de ter o THIS que não varia, associado ao contexto no qual a função foi escrita

    Outra caracteristica importante é que sempre é uma função anônima
*/

let dobro = function(a) {
    return 2 * a;
}

// reescrevendo para arrow function
dobro = (a) => {
    return 2 * a;
}

// forma mais reduzaida se houver apenas um parâmetro
// esse tipo de escrita sem o corpo, signifca que tem um return implicito
dobro = a => 2 * a;
console.log(dobro(Math.PI));

// Outro exemplo
let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';
console.log(ola());