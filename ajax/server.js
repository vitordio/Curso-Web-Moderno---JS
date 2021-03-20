const express = require('express')

const app = express()
app.use(express.json()) // se vier um json no body da requisição, faz o parse 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('.')) // prover os arquivos estáticos dentro da pasta atual que o server.js está

const multer = require('multer')

// dentro do multer, temos a função diskStorage
// recebe um objeto com as configurações do upload
// - qual é a pasta de destino do arquivo
// - como ficará salvo o nome do arquivo 
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload') // salvaremos na pasta upload
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


// Criamos a constante upload passando o objeto 'storage' criado acima e
// dizendo que irá receber um arquivo na requisição com o nome 'arquivo'
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) return res.end('Ocorreu um erro')

        res.end('Upload concluído com sucesso')
    })
})

// Função que recebe os dados do FORM por POST
app.post('/formulario', (req, res) => {
    // Utilizamos o spread para que tudo que venha no body
    // seja colocado no novo objeto
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Formas para receber os dados com o Express
    // - req.body
    // - req.query
    // - req.params

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => {
    res.send('OK')
})

app.listen((8080), () => console.log('Porta 8080. Executando...'))