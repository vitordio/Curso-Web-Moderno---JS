// Reduce tem um conceito importante de reduzir, agragar os valores em um só
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Vitor', nota: 5.3, bolsista: false },
    { nome: 'Pedro', nota: 3.7, bolsista: true },
]

// Transformamos o novo array apenas com a nota dos alunos
console.log(alunos.map(a => a.nota));

/*
    Usamos o reduce para somar todas as notas dos alunos.
    Passando um acumulador, que irá a cada repetição somando e acumulando as notas,
    e o valor atual que será a nota respectiva a repetição.

    Depois da função callback, podemos passar um valor inicial para o reduce. Caso o valor
    não seja passado, pegará sempre os dois primeiros elementos para fazer a soma, por exemplo.
*/
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
})
console.log('Resultado 1: ', resultado);

// Passando um valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 10)

console.log('Resultado 2: ', resultado2);