/*
    O SET é uma estrutura não indexada e que não aceita repetição.

    Não conseguimos pegar, por exemplo: 'Me dá o elemento de indice 2', como fazemos num array
*/
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.size)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);