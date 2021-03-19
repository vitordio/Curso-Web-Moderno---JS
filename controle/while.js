function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatorio(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}

console.log('Até a próxima');

let contador = 1;

while (contador <=10) {
    console.log(`contador é ${contador}`);
    contador++;
}