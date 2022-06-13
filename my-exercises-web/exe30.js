//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const lista = [1, 3, 5, 12, 7, 9, 11, 2, 13, 5];

let menorNum = 0;
let maiorNum = 0;

lista.forEach((lista) => {
  if (lista > maiorNum) {
    maiorNum = lista;
  } else if (lista < menorNum || menorNum == 0) {
    menorNum = lista;
  }
});

console.log(maiorNum);
console.log(menorNum);
