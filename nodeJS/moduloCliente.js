// Para importar algo usando o Commons.js que é o sistema de módulos do NODE, usamos o 'require'
const moduloA = require('./moduloA');
const moduloB = require('./moduloB');

// Acessando os recursos exportados
console.log(moduloA);
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA.olaVitor); // atributo não exportado

console.log(moduloB);
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());