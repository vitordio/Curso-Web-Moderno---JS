// Criando o meu próprio método de ForEach
/*
    Atribuimos ao prototype do Array o método a função de callback,
    dentro dela realizamos o laço for e chamamos de novo a callback
    passando os 3 parametros: nome, indice, array
*/
Array.prototype.forEach2 = function (callback) {
    for( let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ['Vitor', 'Rafael', 'Guilherme'];

aprovados.forEach2((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})