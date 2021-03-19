class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome  = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });

        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 4500);
const contaDeLuz = new Lancamento('Conta de luz', -220);
const freeLa = new Lancamento('Freela', 1000);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz, freeLa);
console.log(contas.sumario());