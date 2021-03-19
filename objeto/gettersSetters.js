const sequencia = {
    _valor: 1, // '_' é uma convenção para informar que o valor deve ser acessado só internamente. Mas o JS permite que vc acesse de qualquer forma mesmo assi, não quer dizwr que é privado
    get valor() { return this._valor++ },
    // set valor(valor) { this._valor = valor }
    // Podemos criar uma validação para devolver o valor
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor;
        }
    }
}

// Chamando os métodos get e set
console.log(sequencia.valor, sequencia.valor);