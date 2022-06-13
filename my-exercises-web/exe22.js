/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function verificarAnuidade(meses, anuidade) {
  let juros = 1 + 5 / 100;
  let jurosConvertido = Math.pow(juros, meses);
  let montante = anuidade * jurosConvertido;

  return montante.toFixed(2);
}

console.log(verificarAnuidade(2, 100));
