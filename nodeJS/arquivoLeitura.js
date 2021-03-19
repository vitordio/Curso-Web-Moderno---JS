// Referenciamos o FileSystem que é um módulo interno do Node para leitura de arquivos
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// ler um arquivo de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// ler um arquivo de forma assincrona - mais interessante
// passamos uma callback para que apenas quando ele tiver lido o arquivo, chamar essa callback
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
})

// para arquivos JSON, não seria necessário importar o fs, tem uma forma mais simples quando é JSON:
const config = require('./arquivo.json');
console.log(config.db);

// leitura de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta');
    console.log(arquivos);

})