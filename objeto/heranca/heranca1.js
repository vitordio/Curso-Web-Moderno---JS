/* 
    Herança em JS é definida por Protótipos. Um objeto em JS tem uma referença para o seu protótipo,
    e essa e a forma que JS define herança.
    Sempre que falarmos de protótipos de objetos, usamos o __proto__.
    
    Exemplo: se eu quiser pegar um atributos que não está definido diretamente no meu objeto,
    o JS procurará no protótipo pai para ver se encontra esse atributo. Se não houver nem no objeto pai,
    nem nos objetos pais dos pais, ele chegará no Object.prototype que é o nivel superior dessa herança.
*/
const ferrari = {
    modelo: 'F40',
    velMax: 324,
    // __proto__: null // podemos definir como nulo caso não queiramos nenhum protótipo desse obj
}

const volto = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volto.__proto__);
console.log(volto.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
