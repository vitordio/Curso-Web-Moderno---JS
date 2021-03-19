// --------------------------------------- PREVENTEXTENSIONS --------------------------------------- //
/*
   Object.preventExtensions - previne que seu objeto seja extendido, ou seja, n poderá adicionar
   atributos novos ao objeto
*/
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar';
delete produto.tag; // poderá deletar sem problemas, só n consegue adicionar

console.log(produto);
console.log('Extensível:', Object.isExtensible(produto));

// --------------------------------------- SEAL --------------------------------------- //
/* 
   Objeto.seal ('selar') - não conseguimos adicionar nem excluir atributos do objeto,
   mas conseguimos modificar os valores do objeto
*/
const pessoa = { nome: 'Juliana', idade: 35};
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 20;
console.log(pessoa);

// --------------------------------------- FREEZA --------------------------------------- //
/*
   Object.freeze - selado + valores constantes - não conseguimos modificar nada no objeto,
   nem excluir nem adicionar e nem modificar os valores, eles são constantes
*/