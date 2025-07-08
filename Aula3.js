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
        .Array -> Um array é uma estrutura de dados que armazena vários valores
                  em uma única variável.  
            -listaB = [...listaA] -> permite fazer uma copia da lista anterior sem precisar
                      alterar o valor da primeira lista quando for manipualr os dados        
        .Objeto -> Um objeto é uma estrutura que permite organizar dados com pares 
                   chave: valor (também chamados de propriedades).
            -delete chave.valor -> usado para deletar o objeto    
            -in (valor in chave) -> usado para verificar se existi um valor dentro do objeto                  
            -objB = {..objA} -> permite fazer uma copia do objeto anterior sem precisar
                    alterar o valor da primeira lista quando for manipualr os dados 

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
//--------------------------------------------------------------------------------------------------
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
// let produtoDisponivel = true;
// let produtoEstoque = 10;
// let quantidadeMinimaEstoque = 15;

// let quantidadeSuficiente = produtoEstoque >= produtoDisponivel;
// let produtoDisponivelSuficiente = produtoDisponivel && quantidadeSuficiente;

// console.log(
//   `O produto está disponível e tem quantidade suficente: ${produtoDisponivelSuficiente}`
// );
//--------------------------------------------------------------------------------------------------
/*
    Exercício 14: Manipulação de Array- parte 1
    a. Crie um array chamado produtos contendo três nomes de produtos.
    b. Acesse e imprima o segundo produto.
    c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
*/
// let produtos = ['Arroz', 'Feijão', 'Linguiça'];
// console.log(produtos[1]);
// produtos[2] = 'Notebook';
// console.table(produtos);
/*
    Exercício 15: Manipulação de Array- parte 2
    a. Crie um array chamado clientes contendo três nomes de clientes.
    b. Adicione um quarto cliente ao array.
    c. Remova o último cliente e imprima o array atualizado.
*/
// let clientes = ['Rafael', 'Vanessa', 'Eduardo'];
// clientes[3] = 'Leticia';
// console.log(clientes);
// clientes.pop();
// console.log(clientes);
/*
    Exercício 16: Manipulação de Objetos- parte 1
    a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
    b. Acesse e imprima o nome do produto.
    c. Modifique o preço do produto e imprima o objeto atualizado.
*/
// let produtos = {
//   nome: 'Arroz',
//   preco: 18.9,
//   quantidade: 2,
// };
// console.log(produtos);
// produtos.preco = 20.0;
// console.log(produtos);

/*
    Exercício 17: Manipulação de Objetos- parte 2
    a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
    b. Adicione a propriedade data ao objeto.
    c. Remova a propriedade produto e imprima o objeto atualizado. 
*/
// const venda = {
//   cliente: 'Rafael',
//   produto: 'Frango',
//   valor: 12.99,
// };
// venda.data = '22/08';
// delete venda.produto;
// console.log(venda);
/*
    Exercício 18: Manipulação dos Tipos Referências
    a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
    b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
    c. Crie um objeto funcionario e atribua seus valores para um novo objeto
    novoFuncionario.
    d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
    alterado.
*/
// const estoque = ['Arroz', 'Feijão'];
// const novoEstoque = [...estoque];

// novoEstoque[0] = 'Macarrão';

// console.log(estoque);
// console.log(novoEstoque);

// console.log('--------------------------');

// const funcionario = {
//   nome: 'Joao',
//   idade: 2025,
// };
// console.log(funcionario);
// const novoFuncionario = { ...funcionario };
// novoFuncionario.idade = 18;
// console.log(novoFuncionario);
