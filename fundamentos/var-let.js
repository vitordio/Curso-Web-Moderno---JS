/*

NÃO É RECOMENDADO USAR ESCOPOS DE VARIÁVEIS GLOBAIS

Var = tem escopo global e escopo de função
Let = tem escopo global, escopo de função e escopo de bloco

*/

/*
 *
 Se definimos uma variável global do tipo var, ela será visivel em todos os blocos.
 Variáveis var definidas dentro de funções, só são visiveís dentro da função
 *
 */

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
    
}

console.log('fora = ', numero); //tanto dentro como fora, vai imprimir 2

/*
 *
 Já com let, como tem escopo de bloco, mesmo não sendo uma função,
 se declararmos uma variável let  dentro de um bloco, ele só será visivel dentro do bloco
 *
 */

var numero = 1;

{
    let numero = 2;
    console.log('dentro = ', numero);   
}

console.log('fora = ', numero);
