/* Seção 2 – Variáveis em JavaScript

    O que você vai aprender agora:

    O que são variáveis

    Como criar variáveis em JavaScript

    Quais palavras-chave usar: let, const, var

    Boas práticas

    Aplicação prática dentro do contexto do Tribal Wars

    Exercícios ao final
*/
/*
  1 - Crie uma variável chamada jogador e armazene seu nome nela. 
*/
let jogador = "TITANSele5";
/*
  2 - Crie uma constante chamada mundoAtual com o número do mundo 
  onde você joga.  
*/
const mundoAtual = 1;
/*
  3 - Crie uma variável chamada tropasDisponiveis com valor 150.  
*/
let tropasDisponiveis = 100;
/*
  4 - Altere o valor de tropasDisponiveis para 300.  
*/
tropasDisponiveis = 300;

/*
  5 - Exiba no console o conteúdo de todas essas variáveis.  
*/
console.log("Jogador: " + jogador);
console.log("Mundo Atual: " + mundoAtual);
console.log("Tropa: " + tropasDisponiveis);
/*
  6 - Crie uma variável tipoUnidade com o nome de uma tropa do jogo 
  (ex: lanceiro, espada, cavalaria leve).  
*/
let tipoUnidade = "cavalaria leve";
/*
  7 - Crie uma variável coordenadaAlvo com a coordenada de uma aldeia 
  (ex: "501|501")  
*/
let coordenadaAlvo = "501|502";
/*
  8 - Exiba no console uma mensagem do tipo:  
  Atacando [coordenada] com [tropa]!
*/
console.log("Atacando: " + coordenadaAlvo + " com " + tipoUnidade + "!");
/*
  9 - Crie uma variável chamada prontoParaAtacar com o valor 
  booleano true ou false. 
*/
prontoParaAtacar = true;
/*
  10 - Exiba no console:

“Ataque iniciado!” se prontoParaAtacar for true

“Aguardando tropas…” se prontoParaAtacar for false

💡 Use uma estrutura if para isso 
(mesmo que não tenha sido ensinado  ainda — é só para testar sua intuição). 
*/
if (prontoParaAtacar == true) {
  console.log("Ataque iniciado!");
} else {
  console.log("Aguardando tropas...");
}
/*
  11 - Crie:

Uma variável quantidade com um número

Uma variável unidade com um nome de tropa

Uma variável alvo com a coordenada da aldeia  
*/
let quantidade = 150;
let unidade = "Lanceiro";
let coordenada = "510|520";
/*
 12 - Junte tudo em uma única mensagem parecida com:
 Enviando 100 espadas para 499|502
 */
console.log("Enviando " + quantidade + " " + unidade + " para " + coordenada);
