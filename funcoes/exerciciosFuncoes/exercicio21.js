function planoSaude(idade) {
    const valorFixo = 100;
    
    if(idade < 10) {
        const valor = valorFixo + 80;
        return `O valor a ser pago é R$ ${valor.toFixed(2).toString().replace(".", ",")}.`;
    } else if(idade < 30) {
        const valor = valorFixo + 50;
        return `O valor a ser pago é R$ ${valor.toFixed(2).toString().replace(".", ",")}.`;
    } else if(idade < 60) {
        const valor = valorFixo + 95;
        return `O valor a ser pago é R$ ${valor.toFixed(2).toString().replace(".", ",")}.`;
    } else {
        const valor = valorFixo + 130;
        return `O valor a ser pago é R$ ${valor.toFixed(2).toString().replace(".", ",")}.`;
    }
}

console.log(planoSaude(8));
console.log(planoSaude(15));
console.log(planoSaude(35));
console.log(planoSaude(52));
console.log(planoSaude(80));