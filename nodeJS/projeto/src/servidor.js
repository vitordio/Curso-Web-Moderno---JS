const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// o URLENCODED retornará uma função middleware que vai fazer um parse no body da requisição
// A linha debaixo signifca que qualquer requisição que fizermos usando o servidor no express,
// passará por esse middleware se for um padrão 'urlencoded' fará um parse no body
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...');
//     next();
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.50 }) // Converte para JSON automaticamente 
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte para JSON automaticamente 
})

app.get('/produtos/:id', (req, res, next) => {
    // req.params é o local onde tenho os parametros q coloquei na URL ":id"
    res.send(bancoDeDados.getProduto(req.params.id)) // Converte para JSON automaticamente 
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdudo({
        // Pegamos os dados vindo no corpo da requisição
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdudo({
        // Pegamos os dados vindo no corpo da requisição
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`);
})