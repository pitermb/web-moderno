//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = [];
const pares = [];

lista.forEach((lista) => {
  if (lista % 2 === 0) {
    pares.push(lista);
  } else {
    impares.push(lista);
  }
});

console.log(
  `Existem ${pares.length} números pares no array: ${pares.toString()}`
);
console.log(
  `Existem ${impares.length} números impares no array: ${impares.toString()}`
);