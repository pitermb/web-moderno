/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

const novoSalario = (planoTrabalho, salarioAtual) => {
  switch (planoTrabalho) {
    case "A":
    case "a":
      return "O funcionario recebeu um aumento de: " + salarioAtual * 0.1;
    case "B":
    case "b":
      return "O funcionario recebeu um aumento de: " + salarioAtual * 0.15;
    case "C":
    case "c":
      return "O funcionario recebeu um aumento de: " + salarioAtual * 0.2;
    default:
      return "Plano invalido";
  }
};

console.log(novoSalario("c", 1700));
