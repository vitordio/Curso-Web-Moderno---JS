const a = 1;
const b = 2;
const c = 3;

// antigamente, para criarmos objetos com os valores e variaveis acima com os mesmos nomes, twria q fazer assim:
const obj1 = { a: a, b: b, c: c };

// Agora conseguimos fazer da seguinte forma mais simples, caso você queira os mesmos nomes das variaveis
const obj2 = { a, b, c };

// Atribuindo valores de variaveis e nome de atributos a objetos
const nomeAtributo = 'ValorProd';
const valorProd = 10;

const obj3 = {};
obj3[nomeAtributo] = valorProd;
console.log(obj3);

// Ou fazendo dessa forma:
const obj4 = {[nomeAtributo] : valorProd};
console.log(obj4);
