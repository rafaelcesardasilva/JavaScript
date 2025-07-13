/* Desafio: Catálogo de Produtos 
    Situação:
        Você criou um sistema de loja que exibe e manipula uma lista de produtos.
        O usuário pode escolher opções no menu para interagir com os produtos.
*/
/*  Parte 1 – Crie o array produtos
    Cada produto deve ser um objeto com:
        nome (string)
        preco (número)
        disponivel (boolean)
    Coloque pelo menos 3 produtos diferentes no array.

 */

const produtos = [
  { nome: 'Mouse', preco: 50, disponivel: true },
  { nome: 'Teclado', preco: 80, disponivel: false },
  { nome: 'Monitor', preco: 900, disponivel: true },
];

/* Parte 2 – Crie a variável opcao (1 a 4) */
let opcao = 1;

/* Parte 3 – Crie o switch(opcao) com as opções abaixo:
    Opção	Ação
    1	    Mostrar o nome de todos os produtos
    2	    Mostrar o produto mais barato
    3	    Mostrar todos os produtos disponíveis (disponivel == true)
    4	    Mostrar o valor total somando todos os preços
    outro	Mostrar "Opção inválida"
*/
switch (opcao) {
  case 1:
    console.log('Produto: ' + produtos[0].nome);
    console.log('Produto: ' + produtos[1].nome);
    console.log('Produto: ' + produtos[2].nome);
    break;
  case 2:
    if (
      produtos[0].preco < produtos[1].preco &&
      produtos[0].preco < produtos[2].preco
    ) {
      console.log('Produto mais barato: ' + produtos[0].nome);
    } else if (
      produtos[1].preco < produtos[0].preco &&
      produtos[1].preco < produtos[2].preco
    ) {
      console.log('Produto mais barato: ' + produtos[1].nome);
    } else {
      console.log('Produto mais barato: ' + produtos[2].nome);
    }
    break;
  case 3:
    if (produtos[0].disponivel) {
      console.log('Produto disponível: ' + produtos[0].nome);
    }
    if (produtos[1].disponivel) {
      console.log('Produto disponível: ' + produtos[1].nome);
    }
    if (produtos[2].disponivel) {
      console.log('Produto disponível: ' + produtos[2].nome);
    }
    break;
  case 4:
    let valorTotal = produtos[0].preco + produtos[1].preco + produtos[2].preco;
    console.log('Soma do preço dos produtos: ' + valorTotal);
    break;
  default:
    console.log('Opção inválida');
    break;
}
