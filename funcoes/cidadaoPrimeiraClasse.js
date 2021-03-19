// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal - toda função em js retorna pelo menos o valor 'undefined'
function func1() {  }

// Armazenar uma função em uma variável
const func2 = function() {  } //função anônima

// Armazenar em um array
const array = [function(a,b) { return a + b }]
console.log(array[0](1,2));

// ou armazarnar funções dentro do array
const array2 = [func1, func2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Olá' } 
console.log(obj.falar());

// Passar função como parâmetro
function run(func) {
    func()
}

run(function() {
    console.log('Executando...');
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

// chamando diretamente já com a variável da função retornada
soma(2, 3)(4);

// ou rmazenando o resultado na variável e depois chamar a variável e continuar a chamada
const somando2Primeiros = soma(2, 3);
somando2Primeiros(4);