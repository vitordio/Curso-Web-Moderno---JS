// Passar a classe Pessoa do exemplo de ClassVSFactory para uma função construtora.
function Pessoa(nome) {
    //Podemos até tirar o this.nome, porém não teríamos mais acesso à essa variavel, não teriamos mais como alterar
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Vitor');
p1.falar();
console.log(p1.nome);
