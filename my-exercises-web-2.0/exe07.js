/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 5, 100) // retornará true
estaEntre(16, 10, 160) // retornará true
estaEntre(3, 3, 150) // retornará false
estaEntre(3, 3, 150, true) // retornará true */

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
  if (inclusivo) return numero <= maximo && numero >= minimo;
  return numero < maximo && numero > minimo;
};

console.log(estaEntre(10, 5, 100));
console.log(estaEntre(16, 10, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));

// retornará true
// retornará true
// retornará false
// retornará true
