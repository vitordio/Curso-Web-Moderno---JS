/*
    Exemplos não usando e usando o callback
*/
const notas = [7.7, 6.0, 5.5, 7.5, 3.2];

// Sem callback
let notasBaixas = [];
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// Com callback
/* o filter irá filtras os elementos do array encima de determinado criterio,
   a função do callback de filter retorna true ou falso e usamos isso pra incluir em notasBaixas

   Verifica em cada elemento de notas se vai entrar ou não no fitlro, ou seja,
   se for menor que 7, insere no array notasBaixas2
*/ 
const notasBaixas2 = notas.filter((nota) => nota < 7);
console.log(notasBaixas2);
