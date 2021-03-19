/********* EXEMPLOS PARA CRIAÇÃO DOS ARRAYS *********/ 
// New Array - não recomendado
let arr1 = new Array('Bia', 'Carlos', 'Ana');

// [] - forma literal
arr1 = ['Bia', 'Carlos', 'Ana'];
console.log(arr1);

/********* ACESSANDO ELEMENTOS DOS ARRAYS *********/ 
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

/********* ADICIONANDO ELEMENTOS NOS ARRAYS *********/ 
arr1[3] = 'Paulo'; // método mais usado para alterar conteudo de determinada posição
arr1.push('Vitor'); // adiciona na última posição do array
console.log(arr1);

/********* PAGANDO TAMANHO DO ARRAY *********/ 
console.log(arr1.length);


// Se pularmos posições do array e adicionarmos numa determinada posição, as anteriores que forem puladas ficarão como undefined
arr1[9] = 'Rafael';
console.log(arr1.length);
console.log(arr1[8] === undefined);
console.log(arr1);

/********* ALGUMAS FUNÇÕES DOS ARRAYS *********/ 
// Sort - ordena o array
arr1.sort();
console.log(arr1);

// Delete - exclui o registro da posicao passada - coloca como undefined e não reordena o array
delete arr1[0];
console.log(arr1);
console.log(arr1[2]); // continua sendo a Bia

// Splice - serve tanto para adicionar como para excluir elementos do array
// splice(posicaoDesejada, atéQualPosicao, elementosASeremAdicionados)
arr1 = ['Bia', 'Carlos', 'Ana'];
arr1.splice(1, 0, 'Elemento1', 'Elemento2') // só adicionará os elementos
console.log(arr1);
arr1.splice(1, 2, 'Elemento3', 'Elemento4') // excluirá da posicao 1 até a 2 e adicionará os elementos
console.log(arr1);
 