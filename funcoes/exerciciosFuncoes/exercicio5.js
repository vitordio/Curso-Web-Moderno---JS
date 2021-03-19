const valorDecimal = (val1 = 0.1, val2 = 0.2) => {
    valorEmReais = val1 + val2;
    return `R$ ${valorEmReais.toFixed(2).toString().replace(".", ",")}`;
}

console.log(valorDecimal());