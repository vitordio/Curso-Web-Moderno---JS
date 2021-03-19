/*
    Closure é o escopo criado quando uma função é decladada.

    Esse escopo permite a função acessar e manipular variáveis externas à função.

    Nada mais é do que o Contexto Léxico em ação!
*/

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());


