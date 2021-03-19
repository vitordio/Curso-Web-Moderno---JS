/*
    This dentro da função arrow é fixo,
    é um this baseado no contexto no qual a função foi escrita
*/

/* 
    Diferentemente do exemplo usado anteriormente sem arrow function,
    era necessário usar o bind para referenciar o this do objeto pessoa,
    já em arrow function não é necessário, ela entende em qual contexto o this pertence
*/
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade);        
    }, 1000)
}

new Pessoa;