/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]] */

const array1 = {
  nome: "Maria",
  profissao: "Desenvolvedora de software",
};

const array2 = {
  codigo: 11111,
  preco: 12000,
};

const montaArray = (obj) => {
  const copia = Object.keys(obj);
  let result = copia.map((key) => [key, obj[key]]);
  return result;
};

const montaArray2 = (obj) => {
  return Object.entries(obj);
};

montaArray(array1); // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
montaArray(array2); // irá retornar [["codigo", 11111], ["preco", 12000]]
montaArray2(array2);

console.log(montaArray(array2));
console.log(montaArray2(array2));
