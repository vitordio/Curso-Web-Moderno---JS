// Usando com o Promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            }) 
        })
    })
}

// Recurso do ES8
// Objetivo de simplicar o uso de promises...
// O objetivo é tornar o código assincrono numa pegada mais sincrona

// Criamos uma função e marcamos ela com a palavra Async, o arait só funcionará se essa palavra estiver marcada
let obterAlunos = async () => {
    // Sempre que tivermos uma função que retorna uma promise, podemos colocar o await e essa função só irá para o proximo passo se tiver resolvida
    const tA = await getTurma('A') // o resultado será atribuído ao tA
    const tB = await getTurma('B')
    const tC = await getTurma('C')

    return [].concat(tA, tB, tC)
} // retorna um objeto do tipo AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))