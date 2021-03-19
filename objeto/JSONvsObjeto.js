/*
    JSON - JavsScript Object Notation
    JSON é um formato de dados, funções dos objetos não estarão presentes no JSON.

    Muito usado entre comunicação entre sistemas. Em mesma linguagens ou diferentes.
*/

const obj = { a: 1, b: 2, c: 3, soma() { return a + b+ c}};

// Transformando OBJ em JSON
console.log(JSON.stringify(obj));

// Transformando JSON em OBJ
// console.log(JSON.parse("{ a:1, b:2, c:3}"")); // formato inválido
// console.log(JSON.parse("{'a':1,'b':2,'c':3}")); // formato inválido
console.log(JSON.parse('{"a":1,"b":2,"c":3}')); // formato VÁLIDO

// JSON suporta todos os tipos de atributos
console.log(JSON.parse('{"a": 1, "b": true, "c": "string", "d": {}, "e": []}'));