/*
    Enquanto o forIn intera encima de indices, o forOf intera encima de valores.
*/
for(let letra of 'Vitor') {
    console.log(letra);
}

const assuntosEcam = ['Map', 'Set', 'Promise']
for(let i in assuntosEcam) {
    console.log(i);
}

for(let assunto of assuntosEcam) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto);
}

for(let chave of assuntosMap.keys()) {
    console.log(chave);
}

for(let valor of assuntosMap.values()) {
    console.log(valor);
}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}

const letrasSet = new Set(['a', 'b', 'c'])
for(let letra of letrasSet) {
    console.log(letra);
}