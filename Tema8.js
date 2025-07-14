/* FUNÇÕES -> São blocos reutilizáveis de código que executam uma tarefa específica.
    .function nome(){} -> função sem parametro
    .function nome(parametro, parametro){} -> função com parametro
    .function nome(parametro){return numero} -> função com retorno

*/

// 1. Uma função que mostra seu nome
// let nome = 'Rafael';
// function exibirNome(nome) {
//   console.log('Olá, ' + nome);
// }
// exibirNome(nome);

//2. Uma função que soma 2 números
// function somar(a, b) {
//   return a + b;
// }
// let resultado = somar(6, 7);
// console.log('Resultado: ' + resultado);

//3. Uma função que recebe um número e mostra se é par ou ímpar
// function parImpar(numero) {
//   if (numero > 0) {
//     if (numero % 2 == 0) {
//       console.log('Par');
//     } else {
//       console.log('Impar');
//     }
//   } else {
//     console.log('Número invalido');
//   }
// }
// parImpar(93);

/* DESAFIOS */

/* 1. Desafios com funções + arrays Função que mostra apenas os produtos disponíveis */
// const produtos = [
//   { nome: 'Mouse', disponivel: true },
//   { nome: 'Teclado', disponivel: false },
//   { nome: 'Monitor', disponivel: true },
//   { nome: 'Fone', disponivel: false },
// ];
// function mostrarDisponiveis(produtos) {
//   let disponiveis = 0;
//   for (let i = 0; i < produtos.length; i++) {
//     if (produtos[i].disponivel) {
//       console.log('Produtos: ' + produtos[i].nome);
//       disponiveis++;
//     }
//   }
//   console.log('Total disponíveis: ' + disponiveis);
// }
// mostrarDisponiveis(produtos);

/* 2. Desafio com funções + arrays: somar os preços dos produtos disponíveis. */
// const produtos = [
//   { nome: 'Mouse', preco: 50, disponivel: true },
//   { nome: 'Teclado', preco: 120, disponivel: false },
//   { nome: 'Monitor', preco: 400, disponivel: true },
// ];
// function somarDisponiveis(produtos) {
//   let somar = 0;
//   for (let i = 0; i < produtos.length; i++) {
//     if (produtos[i].disponivel) {
//       console.log('Produto: ' + produtos[i].nome + ' - ' + produtos[i].preco);
//       somar += produtos[i].preco;
//     }
//   }
//   console.log('Total a pagar: R$ ' + somar.toFixed(2));
// }
// somarDisponiveis(produtos);

/* 3. Desafio mostrar produtos disponíveis acima de um valor mínimo */
const produtos = [
  { nome: 'Mouse', preco: 50, disponivel: true },
  { nome: 'Teclado Gamer', preco: 250, disponivel: true },
  { nome: 'Webcam', preco: 120, disponivel: false },
  { nome: 'Monitor', preco: 400, disponivel: true },
];
function filtrarPorPreco(produtos, minimo) {
  let contador = 0;
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > minimo && produtos[i].disponivel) {
      console.log(
        `Produto: ${produtos[i].nome} Preço: R$ ${produtos[i].preco}`
      );
      contador++;
    }
  }
  console.log('Produtos disponivéis: ' + contador);
}
filtrarPorPreco(produtos, 100);

/* CONTEÚDOS A SER APRENDIDO AINDA */
//1.1 Função que retorna um valor (em vez de só imprimir)?
//1.1 Criar um mini catálogo interativo (com menu + funções)?
//2. Funções que retornam objetos ou somas

//3. Criar um mini sistema funcional com funções

//4. Ou aprender a função anônima e arrow function?

//
