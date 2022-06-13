//Faça um algoritmo que calcule o fatorial de um número.

const verifica = (num) => {
  let x = num;
  let fat = 1;

  while (x > 0) {
    fat = fat * x;
    x--;
  }

  return fat;
};

console.log(verifica(7));
