/*
    Por conta do contexto léxico de onde a função foi escrita,
    no exemplo abaixo, chaando a função exec que possui uma variável valor
    e chama a função 'minhaFuncao', o que será imprimido no console é
    o valor global, pelo fato de que na 'minhaFuncao' não ter declado essa variável,
    ela procurará em outro contexto a variável valor.

    Ela não procura no locao de execução que ela foi chamada, ou seja, na função exec(),
    ela irá procurar no contexto onde ela foi escrita.
*/

const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();