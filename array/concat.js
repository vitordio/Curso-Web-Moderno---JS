/*
    A ideia é concatenar varios arrays em um único array.

    Ou vários elementos ou arrays que passamos como parametro
    para o concat e concatenamos tudo.

    Não altera os arrays principais, só cria um array resultante.
*/
const filhas = ['Vanessa', 'Cibalea'];
const filhos = ['Vitor', 'Pedro'];

const todos = filhas.concat(filhos);
console.log(todos);

// Atribuindo parametros variáveis a um array com o concat
console.log([].concat( [1, 2], [3, 4], 5, [[6, 7]] ));