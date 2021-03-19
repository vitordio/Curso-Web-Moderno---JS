const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo);

// process.exit - sai do programa
// process.stdout (standart output) - saida padrão do programa
// process.stdin (standart input) - entrada do usuário
// -- process.stdin.on('data') - recebe os dados digitados a partir do 'enter (data)' do usuário

if(anonimo) {
    process.stdout.write('Fala anonimo!\n');
    process.exit();
} else {
    process.stdout.write('Informe o seu nome.\n');
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '');
        process.stdout.write(`Fala, ${nome}!\n`);
        process.exit()
    })
}