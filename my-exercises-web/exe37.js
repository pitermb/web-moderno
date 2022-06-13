//Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos, bem como a soma dos elementos.

function progArit(n, a1, r) {
  let soma = [a1];

  for (let i = 0; i < n; i++) {
    let arit = soma[i] + r;
    soma.push(arit);
  }

  console.log(soma.toString());
}

progArit(5, 2, 4);

function progGeo(n, a1, r) {
  let mult = [a1];

  for (let i = 0; i < n; i++) {
    let geom = mult[i] * r;
    mult.push(geom);
  }

  console.log(mult.toString());
}

progGeo(5, 2, 4);
