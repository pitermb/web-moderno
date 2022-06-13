/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console */

const estoque = {
  "maca" : "Não vendemos esta fruta aqui",
  "kiwi": "Estamos com escassez de kiwi",
  "melancia": "Aqui está, são 3 reais o quilo",

}

const feirinha = (fruta) => {
  if (fruta in estoque) return estoque[fruta];
  return "Erro na fruta"
};

console.log(feirinha("pao"));
