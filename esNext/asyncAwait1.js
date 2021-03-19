const { exec } = require("child_process");

function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Vishhh'), 2000)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor(2000))
//     .then(() => console.log('Executando promise...'))

// Fazendo o mesmo código usando Async Await
// A ideia do Async Await é ter um código que parece sincrono mas é um código assincrono, ou seja,
// invés de chamar a função then, fica parado esperando a execução, e só vai pra proxima linha quando terminar

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValor();

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`);

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`);

}

executar()

// Não é possível realizar os métodos abaixo por ser uma async function
const v = executar()
console.log(v);

const v = await executar();

// Ao invés dos metodos acima, para fazer oq esperamos tewmos que usar o then
executar().then(console.log)

/*
    Ou seja, quando estamos dentro de uma função assincrona que chama outra funcção assincrona,
    podemos colocar o await e esperar a função ser resolvida.

    Quando saimos do assincronismo e vbamos para um código sincrono normal temos que usar o then.
*/