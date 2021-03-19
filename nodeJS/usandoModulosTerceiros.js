// Para instalar um componente de terceiros, usamos o npm i + nomeDaBiblioteca
const _ = require('lodash');
setInterval(() => console.log(_.random(1, 100)), 2000);

// Para instalar um componente de forma global e não na pasta nome_modules usamdo o npm i -g
// O NODEMON é o que faz a execução em tempo real, ao atualizarmos o arquivo já executa o arquivo atualizado