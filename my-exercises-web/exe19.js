//O cardápio de uma lanchonete é o seguinte:
/* Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80 */
/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

const lanchonete = (cod, qtd) => {
  switch (cod) {
    case 600:
      return "Sua compra de suco deu: " + qtd * 2.8;
    case 500:
      return "Sua compra de refrigerante deu: " + qtd * 3.5;
    case 400:
      return "Sua compra de bauru deu: " + qtd * 7.5;
    case 300:
      return "Sua compra de Cheeseburguer deu: " + qtd * 5.5;
    case 200:
      return "Sua compra de Hamburguer Simples deu: " + qtd * 4.0;
    case 100:
      return "Sua compra de suco deu: " + qtd * 3.0;
    default:
      return "Produto nao existe";
  }
};

console.log(lanchonete(600, 2));
