/* 
    Usando a FUNCTION DECLARATION, podemos chamar a função antes mesmo de declará-la.
    Pois o interpretador do JS carrega primeiro as funções e deixa elas declaradas.
*/ 

// Function declaration
function soma(x, y) {
    return x + y;
}

// Function Expression
// forma: nome_da_variavel = function(parametros) {}
const sub = function(x, y) {
    return x - y;
}

// Named function expression - pouco usada
const mult = function mult(x * y) {
    return x * y;
}