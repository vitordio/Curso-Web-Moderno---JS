/*

    Na classe, como está acessando a variável THIS, se colocássemos no brower,
    o retorno do nome seria undefined por conta de que quem chamou essa função o this pode variar de valor.

    Isso já não acontece com a função factory por não precisar do this,
    o que acaba sendo uma vantagem. Isso ocorre por que o objeto dentro do return sabe o
    contexto léxico no qual ele foi declarado.

*/
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Vitor');
p1.falar();

// Arrow function factory que recebe nome como parametro
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Vitor Dio');
p2.falar();
