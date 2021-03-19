function area(largura, altura) {
    const area = largura * altura;
    if(area > 20) {
        console.log(`Área acima do permitido: ${area} m².`);
    } else {
        return area;
    }    
}

console.log(area(10,1));
console.log(area(10,3));
console.log(area(10));