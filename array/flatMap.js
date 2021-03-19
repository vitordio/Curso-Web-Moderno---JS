/* 
    FlatMap não é nativo do JS.
    
    A ideia do flatMap é ter uma matriz com arrays e juntar todos em um só.A
    Vamos fazer isso juntando os métodos concat e map no flatMap
*/
const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Vitor',
                nota: 10,
            },
            {
                nome: 'Gabriel',
                nota: 7,
            }
        ],
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Julia',
                nota: 6,
            },
            {
                nome: 'Ana',
                nota: 10
            }
        ],
    }
]

const getNotasDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat( [ 10, 7 ], [ 6, 10 ] ));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);