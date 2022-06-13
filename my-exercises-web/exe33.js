//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4];
const vetorString = ["1", "2", "3", "4"];
const vetorDouble = [1.5, 2.5, 3.5, 4.5];

const msg = "Vetor Inteiro: ".concat(vetorInteiro);
const msg2 = "Vetor String: ".concat(vetorString);
const msg3 = "Vetor Double: ".concat(vetorDouble);

console.log(msg);
console.log(msg2);
console.log(msg3);
