/*  Desafio final: Sistema de Locadora de Filmes
    Situação:
    Você está desenvolvendo um sistema de aluguel de filmes. 
*/
/* Parte 1 – Crie um array filmes com pelo menos 3 objetos.
    Cada objeto deve ter:
        .titulo: string
        .disponivel: boolean
        .genero: string
        .ano: número
 */
const filmes = [
  {
    titulo: 'Matrix',
    disponivel: true,
    genero: 'Ficção',
    ano: 1999,
  },
  {
    titulo: 'Vingadores: Ultimato',
    disponivel: false,
    genero: 'Ação',
    ano: 2019,
  },
  { titulo: 'O Rei Leão', disponivel: true, genero: 'Animação', ano: 1994 },
];

/* Parte 2 – Dados do cliente 
    Crie 3 variáveis:
        .filmeDesejado: título do filme (string)
        .generoPreferido: gênero favorito (string)
        .aceitaFilmeAntigo: boolean
*/
let filmeDesejado = 'Matrix';
let generoPreferido = 'Ficção';
let aceitaFilmeAntigo = true;

/* Parte 3 – Regras do aluguel
    1. Verifique se o título do filme desejado existe no array (usando filmes[0], [1], etc.)
    2. Se o filme for encontrado, e:
        .Está disponível
        .O gênero bate com o preferido do cliente
        .Ou o cliente aceita filme antigo (ano < 2000)
    Então mostre: "Aluguel autorizado"
    Caso contrário: "Aluguel negado"
*/

if (filmes[0].titulo === filmeDesejado) {
  console.log('Filme Encontrado: ' + filmeDesejado);
  if (filmes[0].disponivel) {
    console.log('Filme está disponível');
    if (
      filmes[0].genero === generoPreferido ||
      (aceitaFilmeAntigo == true && filmes[0].ano < 2000)
    ) {
      console.log('Aluguel autorizado');
    } else {
      console.log('Aluguel não autorizado');
    }
  } else {
    console.log('Aluguel não autorizado');
  }
} else if (filmes[1].titulo === filmeDesejado) {
  console.log('Filme Encontrado: ' + filmeDesejado);
  if (filmes[1].disponivel) {
    console.log('Filme está disponível');
    if (
      filmes[1].genero === generoPreferido ||
      (aceitaFilmeAntigo == true && filmes[1].ano < 2000)
    ) {
      console.log('Aluguel autorizado');
    } else {
      console.log('Aluguel não autorizado');
    }
  } else {
    console.log('Aluguel não autorizado');
  }
} else if (filmes[2].titulo === filmeDesejado) {
  console.log('Filme Encontrado: ' + filmeDesejado);
  if (filmes[2].disponivel) {
    console.log('Filme está disponível');
    if (
      filmes[2].genero === generoPreferido ||
      (aceitaFilmeAntigo == true && filmes[2].ano < 2000)
    ) {
      console.log('Aluguel autorizado');
    } else {
      console.log('Aluguel não autorizado');
    }
  } else {
    console.log('Aluguel não autorizado');
  }
} else {
  console.log('Filme não encontrado');
}
