/**
      FUNÇÕES
        .função sem parametro
            -function nomeFuncao(){ instrução }
        .função com parametro 
            -function nomeFuncao(parâmetro){ instrução }
        .fução com return 
            -function nomeFuncao(a,b){ return a + b } let nome = soma(2,4)  
        .chamada de função por variavel direto anonima
            -let total = function (a,b){return a+b}
 */
/*
   1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
       término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
       cálculo).
*/
function calcularMedia(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é: ${mediaDasNotas.toFixed(2)}`);
}
// calcularMedia(8, 5, 9);
/*
   2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
       de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
       primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
       média_final = (média_antes_da_pf + pf)/2 
       Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
       necessário.
       Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
       resultado do cálculo).
*/
function calcularMediaAdaptado(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1, nota2, nota3) / 3;
  return mediaDasNotas;
}
function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
  const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota2);
  const mediaFinal = (mediaSemPf + notaPf) / 2;
  console.log(`A media final desse Aluno: ${mediaFinal}`);
}
// calcularMediaFinal(8, 9, 8, 8);
/*
  3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
      tela o texto:
      a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
      Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32
*/
function converterParaFarenheit(temperaturaCelcius) {
  const tempFarenheit = (9 / 5) * temperaturaCelcius + 32;
  console.log(`A temperatura em Farenheit é: ${tempFarenheit}°F`);
}
// converterParaFarenheit(35);
/*
  4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
      que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
      maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
      etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
      é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
      etiqueta e registre na tela a frase:
      O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
*/
function brunoTemQuePagarImposto(valorEtiqueta) {
  const valorComImposto = 1.08875;
  console.log(`O valor a ser pago é ${valorComImposto}`);
}
brunoTemQuePagarImposto(100);
