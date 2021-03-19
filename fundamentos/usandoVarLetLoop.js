/* 
    Usando o for com LET - como o for possui escopo de bloco,
    o i fica visível apenas dentro ddo for
*/

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('i =', i);


/*
    Definindo um array e incrementando o i em cada passagem do for,
    diferentemente do var, como o let tem escopo de bloco, o valor passado para o i
    dentro do loop fica na memória e retorna o valor da posição que foi inserida.
*/

const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })   
}

funcs[2](); // = 2
funcs[8](); // = 8