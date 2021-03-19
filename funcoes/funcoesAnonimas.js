// Armazenando uma função anonima em uma variável
const soma = function(x, y) {
    return x + y;
}

/* 
    Criamos uma função que recebe 2 parametros e um padrametro operacao que por padrão,
    caso não tnha sido passado nada, irá receber a função soma
*/
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(4, 3, function(x, y) {
    return x - y;
});

// Utilizando uma arrow function
imprimirResultado(3, 4, (x, y) => x * y)

// Função anonima em um objeto
const pessoa = {
    falar: function() {
        console.log('Opa');
    }
}

pessoa.falar();
