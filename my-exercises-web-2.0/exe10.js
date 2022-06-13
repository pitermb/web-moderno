/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

const simboloMais = (repetir) => Array(repetir).fill("+").join("");
const simboloMais2 = (repetir) => "+".repeat(repetir);

console.log(simboloMais(4));
console.log(simboloMais2(4));
