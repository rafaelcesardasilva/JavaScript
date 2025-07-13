/* DESAFIO DE SSITEMA DE TURMA PROPOSTO DO CHATGPT

Você vai criar um sistema simples de turma, que armazena alunos com suas 
notas e matérias.

 */
//Etapa 1 - Crie um array chamado turma com 3 objetos
/*
    nome: string
    idade: número
    matriculado: boolean
    notas: array com 3 números
    disciplinas: array com 3 strings
*/
const turma = [
  {
    nome: 'Rafael',
    idade: 34,
    matriculado: true,
    notas: [5.5, 7.8, 8.9],
    disciplinas: ['Javascript', 'Inglês', 'Informática'],
  },
  {
    nome: 'Vanessa',
    idade: 18,
    matriculado: true,
    notas: [5.2, 8.5, 9.5],
    disciplinas: ['Português', 'Inglês', 'Biologia'],
  },
  {
    nome: 'Julia',
    idade: 27,
    matriculado: true,
    notas: [5.5, 7.8, 8.9],
    disciplinas: ['Física', 'Espanhol', 'Quimica'],
  },
];

//Etapa 2 - Faça o seguinte
/*
    Mostre o nome do segundo aluno
    Mostre a primeira disciplina do terceiro aluno
    Adicione uma nova disciplina "Programação" ao segundo aluno
    Calcule a média das notas do primeiro aluno
    Mostre quantos alunos existem na turma
    Adicione mais um aluno ao final com push()
    Mostre o nome de todos os alunos um por um
*/
//Etapa 2.1
console.log(turma[1].nome);

//Etapa 2.2
console.log(turma[2].disciplinas[0]);

//Etapa 2.3
turma[1].disciplinas.push('Programação');
// console.log(turma[1].disciplinas);

//Etapa 2.4
let mediaNotas =
  (turma[0].notas[0] + turma[0].notas[1] + turma[0].notas[2]) /
  turma[0].notas.length;
console.log(mediaNotas.toFixed(2));

//Etapa 2.5
console.log('Essa turma possui ' + turma.length + ' alunos');

//Etapa 2.6
turma.push({
  nome: 'Erica',
  idade: 30,
  matriculado: false,
  notas: [0, 0, 0],
  disciplinas: ['', '', ''],
});
console.log(turma);

//Etapa 2.7
console.log(turma[0].nome);
console.log(turma[1].nome);
console.log(turma[2].nome);
console.log(turma[3].nome);

//Bónus
/*
    Use .join() para mostrar as disciplinas de um aluno em uma linha só
    Substitua a primeira disciplina do terceiro aluno por "IA" com acesso direto
 */
console.log(turma[0].disciplinas.join(' '));

console.log(turma[2].disciplinas);
turma[2].disciplinas[0] = 'IA';
console.log(turma[2].disciplinas);
