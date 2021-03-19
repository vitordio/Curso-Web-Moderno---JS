// No node usamos o global para Objetos globais
console.log(global);

// Tomar cuidado com o exemplo abaixo pois nunca é bom alterar objetos globais,
// mas para criar um novo dentro do global, fazemos assim:

// Fazendo isso, qualquerr arquivo do sistema tem acesso ao objeto criado
global.minhaApp = {
    saudacao() {
        return 'Olá pessoal!'
    },
    nome: 'Sistema legal'
}

// Para previnir possíveis erros fazendo isso, podemos usar o método freezer,
//para que os atributos do objeto criado não sejam modificados fora do módulo
Object.freeze(global.minhaApp)