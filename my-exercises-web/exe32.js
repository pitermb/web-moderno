//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function valida(lista) {
  let divisor = lista.length;
  let temp = 0;
  const mediaAritmetica = lista.forEach((lista) => {
    temp += lista;
  });
  let media = temp / divisor;
  console.log(media);
}

valida(lista);
