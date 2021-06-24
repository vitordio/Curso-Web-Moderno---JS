// Copiar um arquivo de um lugar para outro
const gulp = require('gulp')

// Execução de tarefas em séries do gulp
// const { series } = require('gulp') // removendo o atributo series do pacote
const series = gulp.series // pegando o atributo series do pacote

function antes(callback) {
    console.log('Tarefa antes!');
    return callback()
}

function copiar(callback) {
    // Callback será chamada quando terminamos de executar determinada tarefa
    // Para o gulp saber que determinada tarefa finalizada

    console.log('Tarefa de Copiar');

    // O próprio gulp passará a função como parâmetro
    return callback()
}

function fim(callback) {
    console.log('Tarefa fim!');
    return callback()
}

// Irá executar as funções em séria, uma após a finalização da outra
module.exports.default = series(antes, copiar, fim)