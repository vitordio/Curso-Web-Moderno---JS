/* 
    No exemplo abaixo, o this.idade dentro do setInterval não referenciará pessoa.
    Para resolver o problema, podemos fazer de duas furmas:
    - colocamos no final da função o bind passando o this do objeto, amarrando assim o this do objeto a chamada da função.
    - criamos uma constante self passando o this do objeto Pessoa
*/
function Pessoa() {
    this.idade = 0;

    const self = this;
    /* setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }, 1000) */
    
    /* setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000) */

    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000)
}

new Pessoa;