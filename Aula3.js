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
*/

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
