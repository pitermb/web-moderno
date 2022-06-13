//Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações

const lista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function intervalo(lista) {
  let dentro = 0;
  let fora = 0;

  for (let i in lista) {
    if (lista[i] >= 10 && lista[i] <= 20) {
      dentro++;
    } else {
      fora++;
    }
  }

  console.log(`Existem ${dentro} numeros dentro do intervalo entre 10 e 20`);
  console.log(`Existem ${dentro} numeros fora do intervalo entre 10 e 20`);
}

intervalo(lista);
