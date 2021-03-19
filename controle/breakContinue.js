const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let x in nums) {
    // se o indice x for igual a 5, vai parar o for
    if(x == 5) break;
    console.log(`${x} = ${nums[x]}`);
}

for(let y in nums) {
    // se o indice x for igual a 5, irá pular esse indice e continuar o laço
    if(y == 5) continue;
    console.log(`${y} = ${nums[y]}`);
}

/* Quando tivermos dois laços, por exemplo, e quisessemos dar um break no primeiro laço, o mais externo,
   criariamos um rotulo para os blocos e chamariamos o break passando o nome do rótulo

   NÃO USAR ESSE TIPO DE ESTRUTURA!
*/

externo: for(a in nums) {
    for(b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}
