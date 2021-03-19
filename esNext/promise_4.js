function gerarNumerosEntre(min, max, tempo) {
    if(min > max)
        [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        
    })   
}

/*
    Forma que temos de conseguir que quando temos várias coisas que queremos fazer,
    nesse exemplo, pegar vários números e só quando todos tiverem sido pegos, exibir na tela.

    Por exemplo, queremos pegar os dados do cliente, do fornecedor, dos produtos,
    só quando chegar todas as respostas, faremos alguma coisa com elas.
*/
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 6000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log())
    .then(() => {
        console.timeEnd('promise');
    })
