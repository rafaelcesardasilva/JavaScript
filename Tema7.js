/* LAÇOS DE REPETIÇÃO - FOR AND WHILE 
    .for(){} -> usado quando você sabe quantas vezes quer repetir
    .while(){} -> usado quando você não sabe ao certo quando vai parar.

*/
// for (let i = 0; i < 5; i++) {
//   console.log('Repetição número: ' + i);
// }

// let contador = 0;
// while (contador < 3) {
//   console.log('Contador: ' + contador);
//   contador++;
// }
//array + for
// const nomes = ['Rafael', 'Ana', 'Carlos'];
// for (let i = 0; i < nomes.length; i++) {
//   console.log('Nome: ' + nomes[i]);
// }

//Desafio 1: Mostrar os nomes dos produtos disponíveis
// const produtos = [
//   { nome: 'Mouse', disponivel: true },
//   { nome: 'Teclado', disponivel: false },
//   { nome: 'Monitor', disponivel: true },
//   { nome: 'Fone de ouvido', disponivel: false },
// ];
// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].disponivel) {
//     console.log('Disponível: ' + produtos[i].nome);
//   }
// }

//Desafio 2: Somar o preço total dos produtos
// const produtos = [
//   { nome: 'Mouse', preco: 50, disponivel: true },
//   { nome: 'Teclado', preco: 100, disponivel: false },
//   { nome: 'Monitor', preco: 70, disponivel: true },
//   { nome: 'Fone de ouvido', preco: 90, disponivel: false },
// ];
// let total = 0;
// console.log('========== Carrinho de compras =========');
// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].disponivel) {
//     console.log('Produto: ' + produtos[i].nome);
//     console.log(`Preco: ${produtos[i].preco}`);
//     console.log('------------------------');
//     total += produtos[i].preco;
//   }
// }
// console.log('Valor a ser pago: R$ ' + total.toFixed(2));

//Desafio 3: Menu de Sistema de Produtos

const produtos = [
  { nome: 'Mouse', preco: 50, disponivel: true },
  { nome: 'Teclado', preco: 100, disponivel: false },
  { nome: 'Monitor', preco: 70, disponivel: true },
  { nome: 'Fone de ouvido', preco: 90, disponivel: false },
];
// console.log(produtos);
console.log('================ MENU ================ ');
console.log('1 - Mostrar todos os nomes dos produtos');
console.log('2 - Mostrar os produtos disponíveis (e o total de quantos são)');
console.log('3 - Somar o preço total dos disponíveis');
console.log('4 - Mostrar o produto mais caro');
console.log('=======================================');
let opcao = 2;
switch (opcao) {
  case 1:
    for (let i = 0; i < produtos.length; i++) {
      console.log(`Produto: ${produtos[i].nome}`);
    }
    break;
  case 2:
    let totalDisponivel = 0;
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].disponivel) {
        console.log(`Produto: ${produtos[i].nome}`);
        totalDisponivel++;
      }
    }
    console.log('Disponíveis: ' + totalDisponivel);
    break;
  case 3:
    let somaDisponivel = 0;
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].disponivel) {
        somaDisponivel += produtos[i].preco;
      }
    }
    console.log(`Preço Total: ${somaDisponivel}`);
    break;
  case 4:
    let maisCaro = 0;
    let nome = '';
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].preco > maisCaro) {
        maisCaro = produtos[i].preco;
        nome = produtos[i].nome;
      }
    }
    console.log(`Produto mais caro ${nome} custa: ${maisCaro}`);
    break;
  default:
    console.log('Opção Inválida');
    break;
}
