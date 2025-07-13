/** MÉTODOS -> São funções associadas a objetos que permitem realizar ações ou manipular os dados desses objetos.
    .Métodos Nativos - String:
        -toUpperCase() -> transforma a string letras maiúsculas 
        -toLowerCase() -> transforma a string em letras minusculas
        -slice(start, end) -> fatia a string pelo index da string
        -substring(start, end) -> parecido com o slice só não pode usar os 
            valores negativos para pegar o index da string 
        -replace(search, replacewith) -> substituir uma parte da string
        -indexOf(string) -> Exibe o inicio do index da string  
        -split(',',limite) -> dividi a string em varias array   
 */

/* Exercício 1: Dada a string 'javascript é divertido', converta a palavra
             'javascript' para letras maiúsculas. 
             Exemplo de Saída: // “JAVASCRIPT é divertido”
*/
// let string = 'javascript é divertido';
// let stringUp = string.replace('javascript', 'javascript'.toUpperCase());
// console.log(stringUp);

/* Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra
             "Aprendendo" e, em seguida, converta essa palavra para letras minúsculas.
             Exemplo de Saída: // “ aprendendo”
*/
// let texto = 'Aprendendo Javascript';
// let textoLow = texto.slice(0, 10).toLowerCase();
// console.log(textoLow);

/* Exercício 3: Dada a string "Aprendendo Python", extraia a palavra 
             "Python" e substitua por Javascript”. 
             Exemplo de Saída: // “Aprendendo Javascript”
*/
// let texto2 = 'Aprendendo Python';
// let textoNovo = texto2.replace('Python', 'Javascript');
// console.log(textoNovo);

/* Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa
             string em um array de produtos e remova o item 'sofá' da lista.
             Exemplo de Saída: “["cadeira", "mesa", "armário"]”
*/
// let lista = 'cadeira, mesa, sofá, armário';
// let array = lista.split(', ');
// console.log(array);
// array.splice(array.indexOf('sofá'), 1);
// console.log(array);
