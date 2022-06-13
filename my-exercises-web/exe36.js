//Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiVetor(param, vetor) {
  let temp = [];

  for (let i = 0; i < vetor.length; i++) {
    let mult = param * vetor[i];
    temp.push(mult);
  }

  console.log(temp);
}

multiVetor(2, vetor1);

function multiVetorMaiorQ5(param, vetor) {
  let temp = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 5) {
      let mult = param * vetor[i];
      temp.push(mult);
    }
  }

  console.log(temp);
}

multiVetorMaiorQ5(2, vetor1);
