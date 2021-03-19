function parImpar(vetor) {
    let contaPares = 0;
    let contaImpares = 0;
    vetor.forEach(element => {
        if(element % 2 == 0) {
            contaPares++
        } else {
            contaImpares++;
        }
    });

    console.log(contaPares, contaImpares);
}

const vetor = [1, 4, 5, 7, 8, 9, 10, 28, 31, 14, 24, 26,];
parImpar(vetor)