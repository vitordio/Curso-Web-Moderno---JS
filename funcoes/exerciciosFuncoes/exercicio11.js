function calculaAnoBissexto(ano) {
    if(ano <= 0){
        return false;
    } else if(ano % 4 == 0) {
        return true;
    } else if(ano % 100 == 0) {
        return false;
    } else if(ano % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(calculaAnoBissexto(2020));
console.log(calculaAnoBissexto(2024));
console.log(calculaAnoBissexto(2022));
console.log(calculaAnoBissexto(2014));
console.log(calculaAnoBissexto(0));