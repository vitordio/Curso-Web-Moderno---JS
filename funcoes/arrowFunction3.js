let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global)

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

/* 
    Mesmo usando o bind numa arrow function, o conceito de que
    o this não muda continua, não irá apontar para o objeto que tentamos referenciar
*/
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports)