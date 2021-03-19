/*
    A heranças nas classes funciona da mesma forma como já vimos em objetos ou funções.
    Porém definimos uma herança usando a palavra 'extends'.
*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    // Se não passarmos nada, herdará todos os atributos do pai
    constructor() {
        // Passamos o sobrenome e o profissao irá vir por padrão 'Professor'
        super('Silva');
        // super('Silva', 'Jogador');
    }
}

const filho = new Filho;
console.log(filho);