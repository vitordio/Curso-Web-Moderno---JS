/*
    No exemplo do módulo A, criamos um atributo dinamicamente
    dentro de cada opção disponivel para exportação.

    Porém o mais comum é atribuir um novo objeto ao module.exports
    e esse objeto criado estará disponível para fora do módulo.
*/
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite!';
    }
}