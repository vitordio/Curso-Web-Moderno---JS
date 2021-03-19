// Simulando uma callback
setTimeout(() => {
    console.log('Executando');
    setTimeout(() => {
        console.log('Executando');
        setTimeout(() => {
            console.log('Executando');
            
        }, 200)
    }, 200)
}, 2000)

// Fazendo a callback com Promise
function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...');
            resolve('Vishhh')
        }, 2000)
    })
}

esperarPor(4000).then(valor => console.log(valor))

// Simulando o primeiro exemplo porém agora com o then
// Melhor do que usando setTimeout encadeado
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)