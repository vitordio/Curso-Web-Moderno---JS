// Usando com o Promise
const http = require('http')
const { resolve } = require('path')
const { reject, get } = require('lodash')

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

let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//             console.log(nomes);
//         })
//     })
// })

// Invés de chamar uma callback dentro da ontouchstart, podemos usar o Promise.all()
// O Promise.all recebe várias promisses e quando todas foram resolvidas, chama os métodos then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
       .then(turmas => [].concat(...turmas))
       .then(alunos => alunos.map(aluno => aluno.nome))
       .then(nomes => console.log(nomes))
       .catch(e => console.log(e.message)) // sempre que usar Promise colocar o catch para tratar o erro

// Simulando um erro no catch
getTurma('D').catch(e => console.log(e.message))