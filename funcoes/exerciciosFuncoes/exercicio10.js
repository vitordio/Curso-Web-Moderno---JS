function divisivelPor3(valor) {
    if(valor % 3 == 0) {
        // return `${valor} é divisível por 3`;
        return true;
    } else{
        // return `${valor} não é divisível por 3`;
        return false;
    }
}

console.log(divisivelPor3(2));
console.log(divisivelPor3(3));