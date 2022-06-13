/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calculoMedia(cod, nota1, nota2, nota3) {
  let media = 0;

  if (nota1 > nota2 && nota1 > nota3) {
    media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;
  } else if (nota2 > nota1 && nota2 > nota3) {
    media = (nota2 * 4 + nota1 * 3 + nota3 * 3) / 10;
  } else {
    media = (nota3 * 4 + nota1 * 3 + nota2 * 3) / 10;
  }

  if (media >= 5) {
    return `O aluno ${cod} foi APROVADO obtendo a média de ${media}.\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}`;
  } else {
    return `O aluno ${cod} foi REPROVADO obtendo a média de ${media}.\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}`;
  }
}

console.log(calculoMedia(321, 8, 6, 5));
