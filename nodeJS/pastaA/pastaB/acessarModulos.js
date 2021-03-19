const moduloA = require('../../moduloA');
console.log(moduloA.ola);

// Como dentro do moduloC tem um index, não precisamos referenciar o arquivo, basta referenciar a pasta
const moduloC = require('./pastaC');
console.log(moduloC.ola2);

// Acessando modulos nativos do Node
const http = require('http');

// Criou um servidor e está acessando na porta 8080, para acessarmos basta digitar localhost:8080
http.createServer((req, res) => {
    res.write('Boa noite!');
    res.end();
}).listen(8080);