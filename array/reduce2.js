const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Vitor', nota: 5.3, bolsista: false },
    { nome: 'Pedro', nota: 3.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const desafio1 = alunos.map(alunos => alunos.bolsista).reduce(todosBolsistas);
console.log(desafio1);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
const desafio2 = alunos.map(alunos => alunos.bolsista).reduce(algumBolsista);
console.log(desafio2);