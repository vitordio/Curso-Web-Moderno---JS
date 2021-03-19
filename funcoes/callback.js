/*
    A ideia do callback é você passar uma função para uma outra função
    e quando determinado evento ocorrer, a função que passamos será
    disparada ( vai ser chamada de volta ).

    Pode ser chamada varia vezes ou uma unica vez.
*/

// No exemplo a seguir, o evento que disparará o callback será o loop do foreach
const fabricantes = ['Mercedez', 'Audi', 'BMW'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

// ou podemos fazer passando no foreach a função
// fabricantes.forEach(function(fabricante){
//     console.log(fabricante);
// })
fabricantes.forEach(fabricante => console.log(fabricante))