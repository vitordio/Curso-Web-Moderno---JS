/*
    O Map é uma estrutura chave-valor. A grande diferença do Map para o objeto é que o Map aceita
    diferentes tipos de chaves, como funções, objetos, strings, etc...

    Não aceita repetição nas chaves. Caso a chave seja duplicada, o valor que permanece é o ultimo atribuído
*/

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react'));
console.log(tecnologias.get('angular').framework);
console.log(tecnologias);

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

// Has é a função que diz se um elemento está ou não contido dentro desse Map
console.log(chavesVariadas.has(123));

// Podemos excluir elementos dentro de um Map
chavesVariadas.delete(123)

// Pega o tamanho do map
chavesVariadas.size()