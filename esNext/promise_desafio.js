const fs = require('fs');
const { resolve } = require('path');

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo.toString())
        })
    }) 
}

const caminho = __dirname + '/dados.txt';
lerArquivo(caminho)
    .then(conteudoArquivo => conteudoArquivo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)