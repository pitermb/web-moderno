//Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

vetor.forEach((vetor) => {
  if (vetor < 5) {
    console.log(`Elemento ${vetor} está no conceito D`);
  } else if (vetor < 7) {
    console.log(`Elemento ${vetor} está no conceito C`);
  } else if (vetor < 9) {
    console.log(`Elemento ${vetor} está no conceito B`);
  } else {
    console.log(`Elemento ${vetor} está no conceito A`);
  }
});
