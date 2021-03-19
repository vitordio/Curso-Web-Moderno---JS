// Como podemos alterar informações de objetos mesmo sendo armazenados em CONST
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'};
pessoa.nome = 'Pedro'; // estou mudando o objeto e não a referencia de memoria em pessoa

// Agora no exemplo a seguir, tento fazer uma nova atribuicao em pessoa, gerando um erro
// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'};

// O Object.freeze, 'congelará' o objeto, e depois disso n conseguirei realizar modificações nele
Object.freeze(pessoa);

// Não podemos alterar nada do objeto
pessoa.nome = 'Ana';
pessoa.idade = 12;
delete pessoa.nome;

console.log(pessoa); // continua -> {nome: 'Pedro'};

/******************/
// Para criar um objeto já congelado, ou seja, constante. Poderiamos ter feito da seguinte forma:
const pessoaConstante = Object.freeze({nome: 'Vitor'});
pessoaConstante.idade = 10;
console.log(pessoaConstante);
