function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

// Simulando o operador 'new'
function novo(f, ...params) {
    const obj = {} // criamos um objeto novo
    obj.__proto__ = f.prototype; // associamos o prototipo do objeto ao prototype da função 'f' passada
    f.apply(obj, params); // executa a função f passando como contexto o obj e os parametros do objeto criado

    return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);
console.log(aula3, aula4);
