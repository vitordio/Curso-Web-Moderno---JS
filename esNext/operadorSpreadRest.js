// Operador ... rest (juntar) / spread (espalhar)

// ------- Usando rest como parametro de função
// Operador rest - a ideia dele é você ter parametros variáveis que serão agrupados num array internamente dentro da função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total( 2, 3, 4, 5 ));

// ------- Usando spread com objeto
const funcionario = { nome: 'Marcia', salario: 12348.99 }

// Vamos usar o spread para pegar todos os atributos de funcionario e espalhando 'atribuindo' num novo objeto
const clone = { ativo: true, ...funcionario }
console.log(clone);

// ------- Usando spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal);