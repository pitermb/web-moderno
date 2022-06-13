/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

const bhaskara = (a, b, c) => {
  let delta = (b * b - 4) * a * c;
  let x1,
    x2 = 0;

  if (!a || !b || !c) {
    console.log("Falta declarar valores");
  } else if (a == 0) {
    console.log("o valor do primeiro campo deve ser maior que zero");
  } else if (delta < 0) {
    console.log("Sem raiz real");
  } else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
  }

  return `O valor de x1: ${x1}\nO valor de x2: ${x2}`;
};

console.log(bhaskara(3, -5, 12));
