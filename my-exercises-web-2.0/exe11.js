/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */

const array1 = [7, 14, "olá"];
const array2 = [-100, "aplicativo", 16];

const novoArray2 = ([primeiroElemento, ...elementosRestantes]) => {
  const ultimoElemento = elementosRestantes.pop();
  console.log(ultimoElemento);
  return [primeiroElemento, ultimoElemento];
};

console.log(novoArray2(array1));
console.log(novoArray2(array2));
