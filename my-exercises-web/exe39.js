// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8, 9, 10];

function trocaElementos(vetorA, vetorB) {
  if (vetorA.length == vetorB.length) {
    tamanho = vetorA.length;
    for (let i = 0; i < tamanho; i++) {
      console.log(vetorA.length);
      vetorB.push(vetorA[i]);
      vetorA.push(vetorB[i]);
    }
    for (let i = 0; i < tamanho; i++) {
      vetorA.shift();
      vetorB.shift();
    }
  } else {
    console.log("Vetor de tamanhos diferentes!");
  }
}

trocaElementos(vetorA, vetorB);

console.log(`Vetor A: ${vetorA}`);
console.log(`Vetor B: ${vetorB}`);
