/* Seção 3 – Operadores e expressões

    O que você vai aprender agora:
    O que são operadores

    Tipos de operadores:

    Matemáticos

    Comparação

    Lógicos

    Concatenação

    Aplicações no Tribal Wars   
*/
/* Parte 1 – Matemática
    1. Crie uma variável com o número total de tropas.

    2. Crie outra com o número de tropas já enviadas.

    3. Calcule quantas tropas ainda estão disponíveis.

    4. Mostre o resultado no console.
*/
let total_tropa = 150;
let tropas_enviadas = 50;
let tropa_disponiveis = total_tropa - tropas_enviadas;

console.log(
  "Enviando: " + tropas_enviadas + "\nDisponivel: " + tropa_disponiveis
);

/* Parte 2 – Comparações
    5. Verifique se você tem mais de 100 tropas disponíveis.

    6. Mostre no console "Ataque possível" ou "Esperando reforços",
    dependendo do resultado.
*/
if (tropa_disponiveis >= 100) {
  console.log("Ataque possivel");
} else {
  console.log("Esperando reforços");
}
/* Parte 3 – Lógica combinada
    7. Crie duas variáveis booleanas: temTropas e alvoAberto.

    8. Se ambos forem verdadeiros, exiba "Preparar ataque".

    9. Caso contrário, exiba "Aguardar condições ideais"
*/
let temTropas = true,
  alvoAberto = true;
if (temTropas && alvoAberto) {
  console.log("Preparar ataque");
} else {
  console.log("Aguardar condições ideais");
}
/* 10. Crie um mini “verificador de ataque”:

    .Se tiver mais de 200 tropas E o alvo estiver na coordenada "500|500",
    exiba "Ataque pesado autorizado!"

    .Caso contrário, exiba "Ação não permitida no momento"
*/
let coordenada = "500|500";
if (total_tropa >= 200 && coordenada === "500|500") {
  console.log("Ataque pesado autorizado");
} else {
  console.log("Ação não permitida no momento");
}
