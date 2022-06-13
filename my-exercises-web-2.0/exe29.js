/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos: */
segundoMaior([12, 16, 1, 5]); // retornará 12
segundoMaior([8, 4, 5, 6]); // retornará 6

function segundoMaior(arr) {
  const numerosOrdenados = arr.sort(
    (numeroA, numeroB) => numeroB - numeroA
  );
  const segundoMaior = numerosOrdenados[1];
  console.log(segundoMaior);
}
