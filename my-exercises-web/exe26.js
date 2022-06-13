//Fazer um programa para encontrar todos os pares entre 1 e 100.

function pares() {
  let x = 1;

  for (let i = 0; i < 100; i++) {
    if (x % 2 === 0) {
      console.log(x);
    }
    x++;
  }
}

pares();
