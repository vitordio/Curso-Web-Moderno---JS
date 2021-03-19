/* 
    Usando o for com VAR - como o for possui escopo global e não de bloco,
    o i fica visível tanto dentro, quanto fora do for
*/
for(var i = 0; i < 10; i++) {
     console.log(i);
}

console.log('i =', i);

/*
    Definindo um array e incrementando o i em cada passagem do for,
    mesmo incrementando o i dentro do array, como a variável var está definida no escopo global
    qualquer posição do array ela valerá 10, que é quando ela sai do laço
*/

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })   
}

funcs[2](); // = 10
funcs[8](); // = 10
