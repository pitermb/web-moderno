/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos */

const funf1 = (capitalInicial, taxaJuros, tempoAplicacao) => {
  const juros = capitalInicial * (taxaJuros / 100) * tempoAplicacao;
  const montante = capitalInicial + juros;

  return montante.toFixed(2);
};

const funf2 = (capitalInicial, taxaJuros, tempoAplicacao) => {
  const juros = 1 + taxaJuros / 100;
  const jurosConvertido = Math.pow(juros, tempoAplicacao);
  const montante = capitalInicial * jurosConvertido;

  return montante.toFixed(2);
};

console.log(funf1(10000, 10, 3));
console.log("---------------------------------");
console.log(funf2(10000, 10, 3));
