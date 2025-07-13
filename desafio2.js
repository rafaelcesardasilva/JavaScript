/* OBS: Não consegui fazer o desafio, foi feito pelo chatGpt, minha logica tava errada
 Desafio Final – Sistema de Biblioteca Interativo - 
     Situação:
        Você vai montar um sistema simples de empréstimo de livros, com:
        Um array de objetos representando os livros
        Condições de verificação com if/else e operadores lógicos
        Uso de variáveis, acesso a propriedades, e console.log()
 
 */
//Parte 1 – Crie o array livros, com pelo menos 3 objetos.
/* Cada livro deve ter:
    .titulo (string)
    .disponivel (boolean)
    .categoria (string)
    .ano (número)
*/
const livros = [
  {
    titulo: 'Dom Casmurro',
    disponivel: true,
    categoria: 'Romance',
    ano: 1899,
  },
  {
    titulo: 'O senhor dos Anéis',
    disponivel: false,
    categoria: 'Fantasia',
    ano: 1954,
  },
  {
    titulo: 'A Culpa é das Estrelas',
    disponivel: true,
    categoria: 'Drama',
    ano: 2012,
  },
];
/* Parte 2 – Simule um usuário
    Crie estas variáveis:
        livroDesejado → (string, com o título que ele quer)
        categoriaPreferida → (string)
        aceitaLivroAntigo → (boolean)
*/
let livroDesejado = 'Dom Casmurro';
let categoriaPreferida = 'Romance';
let aceitaLivroAntigo = true;

/* Parte 3 – Regras de empréstimo
    Crie um sistema que:
        1.Procura o livro pelo título (use .find() ou acesso manual com [0], [1], etc.)
        2.Se o livro for encontrado, e:
            .disponivel == true
            .a categoria bate com a preferida
            .OU o usuário aceita livro antigo (aceitaLivroAntigo == true e ano < 2000)
        3.Então: mostrar "Empréstimo autorizado"
        Caso contrário: mostrar "Empréstimo negado"
 */
let livroEncontrado = null;

if (livros[0].titulo === livroDesejado) {
  livroEncontrado = livros[0];
} else if (livros[1].titulo === livroDesejado) {
  livroEncontrado = livros[1];
} else if (livros[2].titulo === livroDesejado) {
  livroEncontrado = livros[2];
}

// Verificações
if (livroEncontrado !== null) {
  console.log('📚 Livro encontrado: ' + livroEncontrado.titulo);

  if (livroEncontrado.disponivel) {
    console.log('✅ Livro está disponível');

    if (
      livroEncontrado.categoria === categoriaPreferida ||
      (aceitaLivroAntigo && livroEncontrado.ano < 2000)
    ) {
      console.log('🎉 Empréstimo autorizado!');
    } else {
      console.log(
        '❌ Empréstimo negado: Categoria não bate e não aceita livro antigo.'
      );
    }
  } else {
    console.log('❌ Empréstimo negado: Livro indisponível.');
  }
} else {
  console.log('🔍 Livro não encontrado na biblioteca.');
}
