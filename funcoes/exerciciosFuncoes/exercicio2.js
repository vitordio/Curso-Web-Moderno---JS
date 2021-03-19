const classificaTriangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(1, 1, 1));
console.log(classificaTriangulo(1, 1, 2));
console.log(classificaTriangulo(1, 2, 1));
console.log(classificaTriangulo(1, 2, 3));
