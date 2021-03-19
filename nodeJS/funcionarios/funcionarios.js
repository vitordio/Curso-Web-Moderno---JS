const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

// Importamos o axios, módulo instalado que é um client HTTP, faz requisições de algo que está remoto
const axios = require('axios');

const chineses = funcionario => funcionario.pais === 'China';
const mulheres = funcionario => funcionario.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

// No resumo, realizaremos uma requisição encima da url e vamos obter o conteudo do arquivo
axios.get(url).then(response => {
    const funcionarios = response.data;

    // O desafio é obter a mulher chinesa com menor salario
    const funcionario = funcionarios
                            .filter(chineses)
                            .filter(mulheres)
                            .reduce(menorSalario)

    console.log(funcionario);
})