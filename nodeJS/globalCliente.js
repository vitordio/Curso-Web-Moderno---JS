require('./global');

console.log(global.minhaApp.saudacao());
console.log(minhaApp.saudacao());

minhaApp.nome = 'Eita!'; // não foi alterado devido ao freeze
console.log(minhaApp.nome);