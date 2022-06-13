/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará [] */

const filtrarNumeros = (array) => array.filter((value) => typeof value === "number");

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));

const filtrarNumeros2 = (array) => array.filter(filtraString);
const filtraString = (num) => typeof num === "number";

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros2(["a", "c"]));
