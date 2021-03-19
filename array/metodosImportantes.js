// Métodos importantes dos Arrays
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

/* POP - remove p ÚLTIMO elemento do array*/
pilotos.pop();
console.log(pilotos);


/* PUSH - insere um elemento na ÚLTIMA posição*/
pilotos.push('Verstappen');
console.log(pilotos);

/* SHIFT - remove o PRIMEIRO elemento do array */
pilotos.shift()
console.log(pilotos);

/* UNSHIFIT - insere o elemento na PRIMEIRA posição do array */
pilotos.unshift('Hamilton');
console.log(pilotos);

/* SPLICE - pode adicionar ou remover elementos do array */
// adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona a partir indice 2, não remove ningúem '0', e adiciona os dois elementos passados
console.log(pilotos);

// removendo
pilotos.splice(3, 1) // remove a partir do indice 3, apenas uma posição
console.log(pilotos);

/* SLICE - retorna um novo array a partir de tal indice até tal indice do array de um array */
const algunsPilotos = pilotos.slice(2) // todos a partir da posicao 2
// const algunsPilotos = pilotos.slice(2, 4) // todos a partir da posicao 2 até a 4 (item 4 n entra)
console.log(algunsPilotos);
