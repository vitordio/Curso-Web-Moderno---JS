const quitanda = (valor) => {
    switch (valor) {
        case 'Maça':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'Kiwi':
            console.log('Estamos comescassez de kiwis');
            break;
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('Erro! Por favor tente denovo.');
            break;
    } 
}

quitanda('Maça');
quitanda('Kiwi');
quitanda('Melancia');
quitanda('');