// Arrow function
const soma = (a, b) => a + b

// Arrow function (this)
const lexico1 = () => console.log((this === exports));

// Parametro default
function log(texto = 'Node') {
    console.log(texto);
}
log()
log(undefined)
log('Vitor')

// Operador rest - a ideia dele é você ter parametros variáveis que serão agrupados num array internamente dentro da função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total( 2, 3, 4, 5 ));