/* Hoisting = jogar pra cima

   No exemplo abaixo, em muitas linguagens o primeiro log daria um erro por não termos declarado
   porém em JS, o var da linha debaixo é jogada pra cima e a variável será declarada.
   
   Da a mensagem de undefined na primeira sentença -> variável existe e foi declarada.

   O hoisting ocorre tanto dentro como fora de funções

   Já com o LET, o efeito do hoisting não ocorre e gera o erro de que a variável não foi definida
*/

console.log('a =', a);
var a = 2;
console.log('a =', a);

console.log('b = ', b);
let b = 1;
console.log('b = ', b);

