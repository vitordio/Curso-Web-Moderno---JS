/* 
    O Foreach percorre o array e passa uma função callback para cada
    interação do loop passando o próprio elemento e o indice correspondente.
 
    Há também um terceiro parametro que é passado que é o próprio Array
*/

const aprovados = ['Vitor', 'Rafael', 'Guilherme'];
aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})

// Não é obrigatório colocar os dois parametros
aprovados.forEach( nome => console.log(nome) );

// Podemos criar uma função e passar para o forEach
const exibirAprovados = function(aprovado) {
    console.log(aprovado);
}

aprovados.forEach(exibirAprovados);