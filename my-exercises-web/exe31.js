//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

const lista = [-4, -3, -2, -1, 0, 1, 2, 3];

let contador = 0;

lista.forEach((lista) => {
  if (lista < 0) {
    contador++;
  }
});

console.log(contador);
