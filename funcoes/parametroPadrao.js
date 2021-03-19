// Estratégia 1 para gerar valor padrão
function soma1(a,b,c) {
    a = a || 1; // a recebe a ou o valor 1
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma1());
console.log(soma1(1, 2, 3));
console.log(soma1(1, 2));
console.log(soma1(0,0,0)); // Nessa 1 estratégia, se passarmos o valor '0', retornará como sendo falso, e por isso, assumirá o valor padrão

// Estratégia 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1; // 1 opção
    b = 1 in arguments ? b : 1; // 2 opção - verifica se on indice 1 foi passado [0 = a, 1 = b, 2 = c]
    c = isNaN(c) ? 1 : c // 3 opção - verifica se não é um número  
    
    return a + b + c;
}

console.log(soma2());
console.log(soma2(1, 2, 3));
console.log(soma2(0,0,0));

// Estratégia para gerar valor padrão no ES2015 - Versão mais adequada
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3());
console.log(soma3(1, 2, 3));
console.log(soma3(0, 0, 0));
