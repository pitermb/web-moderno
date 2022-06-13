//Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imprimir(inicio = 0, fim = 100) {
  if (inicio > fim) {
    let temp;
    temp = fim;
    fim = inicio;
    inicio = temp;
  }

  let impares = [];

  while (inicio < fim) {
    if ((inicio % 2 !== 0 && inicio % 3 === 0) || inicio === 1) {
      impares.push(inicio);
    }
    inicio++;
  }

  console.log(impares.toString());
}

imprimir(100,50);
