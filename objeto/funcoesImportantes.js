// Funções importantes do Object
const pessoa = {
    nome: 'Vitor',
    idade: 20,
    peso: 63.3
}

// Peganos as chaves do obejto com o KEYS
console.log(Object.keys(pessoa));

// Pegando os valores do objeto com o VALUES
console.log(Object.values(pessoa));

// Retornando o array do objeto com os subarrays de chave valor com o ENTRIES
console.log(Object.entries(pessoa));


/* Definindo uma nova propriedade 'atributo' de um objeto
   Conseguimos fazer isso através do objeto.atributo. Porém usando o
   DEFINEPROPERTY podemos definir algumas caracteristicas dessa propriedade, como:
   - Se ela poderá ser alterada
   - Se ela ficará visivel
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // permite ser listada na lista de chaves do Objeto
    writable: false, // nao permite ser sobrescrtia
    value: '28/10/2000'
})
pessoa.dataNascimento = '10/10/2005'; // não alteará pois definimos como não podera ser sobrescrita
console.log(pessoa);

// Object.assign - pega todos os atributos do objeto que passei e joga dentro do objeto de destino 'dest'
const dest = { a: 1};
const o1 = { b: 2};
const o2 = { c: 3, a: 4};
Object.assign(dest, o1, o2); // sobrescreverá o atributo A do dest para 4
console.log(dest);

// Para definir um objeto como Constante usando o FREEZE 'congelar'
const pessoaConstante = Object.freeze({nome: 'Vitor'}); // não conseguiremos realizar nenhuma mudança nessa objeto
pessoaConstante.idade = 10;
pessoaConstante.nome = 'Igor';
console.log(pessoaConstante); // { nome: 'Vitor' }


