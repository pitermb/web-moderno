/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). */

const pontos = ["12 23 40 11 18 35 45 7 5 50 2"];

const pedroJogos = (pontos) => {
  let pontosConver = pontos.toString().split(" ").map(Number);
  let maiorPonto = pontosConver[0];
  let menorPonto = pontosConver[0];
  let bateuRecorde = 0;
  let piorJogo = 0;

  for (let i = 0; i < pontosConver.length; i++) {
    if (pontosConver[i] >= maiorPonto) {
      maiorPonto = pontosConver[i];
      bateuRecorde++;
    } else if (pontosConver[i] <= menorPonto) {
      menorPonto = pontosConver[i];
      piorJogo = i + 1;
    }
  }

  return `Maior Recorde de Pedro foram ${maiorPonto} pontos \nMenor pontuação aconteceu no jogo ${piorJogo}, teve apenas ${menorPonto} pontos \nEle bateu seu proprio recorde ${
    bateuRecorde - 1
  } vezes em ${pontosConver.length} jogos`;
};

console.log(pedroJogos(pontos));
