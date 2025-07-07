/*
    AULA 3 - DADOS, VARIÁVEIS E OPERAÇÕES
        .let -> usado para declarar variaveis, são mutaveis podendo ser reatribuídas
                mas não são redeclaradas e não é içada (hoisting) que nem o var  
        .const -> são variaveis declaradas que possuem valor único ou sejá imutavéis
        .tipos primitivos: 
          -String -> representa uma cadeia de caracteres 
          -Number -> representa um numero, tanto real ou decimal 
          -Boolean -> representa uma valor boleano de 0 e 1 ou false e true
        .undefined -> representa o valor de uma variavel quando ela não é iniciada ou
                      definida de forma correta  
        .null -> representa um variavel vazia, não contém valor nenhum
        .typeof -> monstra o tipo de dado que a variavel representa
        .template string -> consolo.log(`Mensagem: ${variavel}`)
        .Operadores Aritméticos -> fazem operações basicas de matemática. 
           (+  -  *  /  %  **  ++  --)
        .Operadores de comparação -> Usados para comparar valores e retornam um valor booleano(true e false)
           ( ==, ===, !=, !==, >, >=, <, <= ) 
        .Operadores logicos -> São usados para combinar e manipular valores booleanos.
           (&& and , || or, ! not)
        .Converção explicita 
            -String(variavel) -> converte para o tipo string
                variavel.toString() -> também converte para string
            -Boolean(variavel) -> verifica se tem um valor na variavel retornando true ou false como uma forma de conversão    
            -Number(variavel) -> converte uma valor de string em numero 
        

*/
//--------------------------------------------------------------------------------------------------
/*
    Exercício 1: Escreva um programa simples que exiba uma string no terminal utilizando
                 o console.log.
*/
// console.log('Hello World !');
/*
    Exercício 2: Modifique o programa anterior para armazenar a mensagem em uma
                 variável antes de exibi-la no console.
*/
// let mensagem = 'Hello World !';
// console.log(mensagem);
/*
    Exercício 3: Declare três variáveis mutáveis: nome (string), idade (number) e
                 isStudent (boolean).
*/
// console.log('-------------------');
// let nome = 'Rafael',
//   idade = 34,
//   isStudent = true;
// console.log(`Nome: ${nome}\nIdade: ${idade}\nEstudante: ${isStudent}`);
/*
    Exercício 4: Modifique o valor das variáveis anteriores e imprima os novos valores no
                 console.
*/
// console.log('-------------------');
// nome = 'Vanessa';
// idade = 26;
// isStudent = false;
// console.log(`Nome: ${nome}\nIdade: ${idade}\nEstudante: ${isStudent}`);
/*
    Exercício 5: Crie uma variável constante que irá armazenar um número e imprima no
                 console.
*/
// console.log('-------------------');
// const NUMERO = 666;
// console.log(NUMERO);
/*
    Exercício 6: Declare duas variáveis, endereco e telefone, sem atribuir valores a
                 elas.
*/
// let endereco, telefone;
/*
    Exercício 7: Declare variáveis com nomes descritivos para armazenar o nome de um
                 produto, seu preço e a quantidade em estoque.
*/
// console.log('-------------------');
// let nomeProduto = 'Arroz',
//   preco = 18.5,
//   estoque = 10;
// console.log(`Produto: ${nomeProduto}\nPreço: ${preco}\nEstoque: ${estoque}`);
/*
    Exercício 8: Declare uma variável para armazenar o nome de uma cidade e outra para
    armazenar a sua população. Exiba uma mensagem combinando ambas as variáveis.
*/
// console.log('-------------------');
// let cidade = 'Rio de janeiro',
//   populacao = 6.2;
// console.log(`Cidade: ${cidade}\nPopulação: ${populacao} milhões de habitantes`);
// console.log('-------------------');
// console.table({ nome, idade, isStudent });

/*
    Exercício 9: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
    Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
    produto após aplicar o desconto e o imposto.
    Exemplo de Saída: // “Preço final do produto: R$ 172”
*/
// let produtoPreco = 200.0;
// let desconto = 40.0;
// let imposto = 12.0;
// let precoFinal = produtoPreco - desconto + imposto;
// console.log(
//   `Preço final do produto: ${precoFinal.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   })}`
// );
/*
    Exercício 10: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional
    de R$ 30,00. Calcule o preço de venda do produto.
    Exemplo de Saída: // “Preço de venda do produto: R$ 130”
*/
// let produtoPreco = 100.0;
// let vendaAdicional = 30.0;
// let precoFinal = produtoPreco + vendaAdicional;
// console.log(
//   `Preço de venda do produto: ${precoFinal.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   })}`
// );
/* 
    Exercício 11: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
    produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
    é R$300,00.
    Exemplo de Saída: “Preço com desconto: R$ 250” e “Está dentro do orçamento? True”
*/
// let orcamento = 250.0;
// let desconto = 50.0;
// let precoProduto = 300.0;
// let precoDesconto = precoProduto - desconto;
// console.log(
//   `Preço com desconto: ${precoDesconto.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   })} Está dentro do Orçamento: ${precoDesconto === orcamento}`
// );
/*
    Exercício 12: Você tem duas variáveis, uma que representa a quantidade de produtos em um
    estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
    produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
    suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
    número. Imprima no console se a quantidade é suficiente ou não.
    Exemplo de Saída: “A quantidade no estoque é suficiente: true”
*/
// let quantidadeProdutosEstoque = '20',
//   quantidadeMinimaEstoque = 20;
// let quantidadeSuficiente =
//   Number(quantidadeProdutosEstoque) >= quantidadeMinimaEstoque;
// console.log(`A quantidade no estoque é suficiente: ${quantidadeSuficiente}`);
/*
    Exercício 13: Você tem três variáveis: uma que representa se um produto está disponível como
    um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
    terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
    se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
    mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
    está disponível e tem a quantidade suficiente.
    Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O
    produto está indisponível: false”
*/
let produtoDisponivel = true;
let produtoEstoque = 10;
let quantidadeMinimaEstoque = 15;
console.log(
  `O produto está disponível e tem quantidade suficiente: ${produtoDisponivel}`
);
