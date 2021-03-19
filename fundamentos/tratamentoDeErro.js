function imprimir(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');   
    } catch (e) {
        tratarErro(e)
    } finally { // sempre será chamado, se ocorrer erro ou não
        console.log('Final');
        
    }
}

function tratarErro(erro) {
    // throw new Error('Erro, mensagem...');
    throw 'Erro, mensagem...';
}

const obj = { nome: 'Vitor' };
imprimir(obj);