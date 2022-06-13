/*  Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    Exemplos:
    cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    cumprimentar("Maria") // retornará "Olá, Maria!" */

const cumprimentar = (nome) => `Olá ${nome}!`;
const cumprimentar2 = (nome) => `Olá `.concat(nome).concat(`!`);

console.log(cumprimentar(`Piter`));
console.log(cumprimentar2(`Piter`));
