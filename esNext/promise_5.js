/*
    Passamos o resolve para resolver a promise e agora, usamos o 
    reject para rejeitar ela, por exemplo:

    Não deu pra cumprir a promessa, acontecveu algum erro durante a
    execução, ai rejeitamos a promessa.
*/
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(erro => console.log(`erro: ${erro}`))
    .then(() => console.log('Fim!')) // depois do catch, chega mais nenhuma informação, mas ainda podemos chamar o then