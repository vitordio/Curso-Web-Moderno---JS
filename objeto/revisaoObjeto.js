// Coleção dinâmica de pares chave-valor
// Forma de criar um objeto pode ser chamando a função depois do new 'Object'
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca'] = 'Generica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca'];

console.log(produto);

// ---------------------------------------------------------------------------------------------

// Outro tipo de criação de objeto
const carro = { 
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 20,
        endereco: {
            logradouro: 'Rua teste',
            numero: 123,
        }
    },
    // adicionando arrays ao objeto
    condutores: [{
        nome: 'Vitor',
    },
    {
        nome: 'Eduardo'   
    }],
    calcularValorSeguro: () => {},
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua aimbere';

console.log(carro);

delete carro.condutores[0];
delete carro.proprietario;
console.log(carro);
