/* o For-In não é tanto usado
   no for-in recebemos o indice e não o valor desse indice
*/
const notas = [6.7, 8.9, 6.4, 10];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Vitor',
    idade: 19
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}