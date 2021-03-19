/*
    Arquivos dentro do NODE são tratados como Módulos. Os módulos só podem ser
    acessados dentro do próprio módulo.
    
    Para acessar um módulo fora do escopo, devemos exportar ou importar alguma coisa.

    Apenas aquilo que exportamos ficará visível para fora, qualquer outra coisa
    criada e não exportada. não será possível acessar de outros módulos(arquivos)

    Algumas formas de exportar são:
*/

// Usando o 'this' no NODE. O que você usou poderá ser acessado em outro arquivo
this.ola = 'Fala pessoal!';

// Usando o 'exports'
exports.bemVindo = 'Bem vindo ao node';

// Usando o 'module.exports' - forma mais clássica
module.exports.ateLogo = 'Até a próxima';

// Atributo não exportado
const olaVitor = 'Salve, Vitor!';