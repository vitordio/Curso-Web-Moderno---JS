/*
    O fato da função não receber nenhum parâmetro não quer dizer que não
    podemos passar nenhum parâmetro.

    Utilizamos o arguments pra isso. Mas na versão atual usamos o rast ou spread p isso, veremos em aulas posteiores
*/

function soma() {
    let soma = 0;

    // pegamos o indice do array 'arguments'
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma()); // o soma vai ser 0 porque nao passamos nenhum parametro
console.log(soma(1));
console.log(soma(1,2,3));
console.log(soma(1,2, 'Teste'));