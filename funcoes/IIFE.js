/*
    IIFE -> Immediately Invoked Function Expression
    
    Funções AutoInvocadas - uma função que você declara, mesmo anônima,
    e na hora da declaração, vc ja chama ela, já invoca a execução dessa funcao.

    Uma das funções de uma função auto invocada é principalmente quando estamos 
    usando o browser e queremos fugir do escopo global.
*/

// Engloba a função dentro dos () e no final, coloca (), para invocar imediatamente a função
(function() {
    console.log('Será invocado na hora.');
    console.log('Foge do escopo mais abrangente.');
})()