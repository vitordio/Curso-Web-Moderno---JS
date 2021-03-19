/* 
    O this no JS pode variar:
    - numa função normal, o this pode varia de acordo com quem chamou a função
    - já numa arrow function (=>), o this não varia
*/

/* 
    This e a Função bind:
    - Amarra determinado objeto para ser o dono da execução daquele método sempre que chamado.
    - quando chamarmos a função com o bind passando o objeto, o this sempre referenciará esse objeto passado
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()

// atribuindo o falar de pessoa numa variável, não reconhecerá o atrbiuto saudacao
const falar = pessoa.falar 
falar() // conflito entre paradigmas: funcional e OO

/* 
    Para resolver isso, usamos o bind:
    - Portanto ao passar o pessoa na função bind, o this voltará a reconhecer como sendo de pessoa
*/
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

