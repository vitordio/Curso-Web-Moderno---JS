const { reject } = require("lodash")

// Tratamento de erros com Async Await
function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * (fator) + min)

        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })   
}

// A forma que temos de rejeitar uma promessa dentro de uma função assincrona, é gerando uma exceção com try catch e throw
// A forma que temos de resolvar uma promesssa dentro de uma função assincrona, é simplesmente retornando o valor
async function gerarMegaSena(qtdNum, tentativas = 1) {
    try {
        const numeros = []
        // Fazemos um for encima de um array de tamanho igual ao da variável
        // Fazendo o Array.fill ou Array.keys, é criado um array com o tamanho que queremos com todas as posições undefined
        for(let _ of Array(qtdNum).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }

        return numeros

    } catch(e) {
        // Podemos colocar para tentar novamente e colocar um numero de tentativas
        if(tentativas > 10) {
            throw 'Que chato!'
        } else {
            return gerarMegaSena(qtdNum, tentativas + 1)
        }        
    }

    return numeros
}

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)