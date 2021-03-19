/* 

    A promise nada mais é do que uma 'promessa'. Usamos promisses
    quando queremod ter algum tipo de processamento assincrono.

    Podemos ter um caso de sucesso ou caso de erro.

    Criamos uma função que recebe 2 parametros e retonra uma promessa. Dentro dessa
    promessa, colocamos um setTimeout para dar um delay simulando um tempo de processamento.

    Quando essa promeça for atendida, chamará o resolve.
*/
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // o resolve aceita apenas um unico parametro
            resolve(frase)
            // reject(frase)
        }, segundos * 2000)
    })
}

// Quando retornamos uma Promise a promise tem a função then que é chamada quando resolvemos a promise
// Podemos encadear quantos then quisermos e a cada termino do then o resultado de um vai passando pro outro
falarDepoisDe(2, 'Oi, eu sou o Vitor')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    // para tratamos um erro gerado pelo 'reject', usamos o .catch
    .catch(e => console.log(e))