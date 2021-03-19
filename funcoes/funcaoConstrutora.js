/*
    Função construtora como o molde funciona +- como uma classe em outras linguagens
    onde definimos os atributos e comportamentos que podem ser publicos ou privados.

    Para criar funções ou atributos privados criamos com let ou const.
    Métodos ou atributos publicos usamo so this para referenciar o objeto.
*/

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    //método publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método privado
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari =  new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
