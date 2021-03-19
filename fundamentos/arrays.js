const valores = [1, 10.5, 7,5];
console.log(valores[0]);
console.log(valores[3]);

valores[3] = 11;
console.log(valores);

// Pegar a quantidade de itens do array
console.log(valores.length);

// Adicionar novos elementos no array
console.log(valores.push('teste', 10, false, null));
console.log(valores);

// Remover a última posição do array
console.log(valores.pop());
console.log(valores);