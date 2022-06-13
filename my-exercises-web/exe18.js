/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const extenso = (num) => {
  switch (num) {
    case 10:
      return "Dez";
    case 9:
      return "Nove";
    case 8:
      return "Oito";
    case 7:
      return "Sete";
    case 6:
      return "Seis";
    case 5:
      return "Cinco";
    case 4:
      return "Quatro";
    case 3:
      return "Tres";
    case 2:
      return "Dois";
    case 1:
      return "Um";
    case 0:
      return "Zero";
    default:
      return "Numero fora do intervalo";
  }
};

console.log(extenso(10));
