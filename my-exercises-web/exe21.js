/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function planoSaude(idade) {
  let convenio = 100;
  let valor = 0;

  if (idade >= 60) {
    valor = convenio + 130;
    return "Valor do plano de saúde custará: " + valor;
  } else if (idade >= 30) {
    valor = convenio + 95;
    return "Valor do plano de saúde custará: " + valor;
  } else if (idade >= 10) {
    valor = convenio + 50;
    return "Valor do plano de saúde custará: " + valor;
  } else {
    valor = convenio + 80;
    return "Valor do plano de saúde custará: " + valor;
  }
}

console.log(planoSaude(15));
