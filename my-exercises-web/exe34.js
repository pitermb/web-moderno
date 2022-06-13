//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

const string1 = "maco";
const string2 = "macaco";

function comparaString(string1, string2) { 
  const caracteres1 = [...new Set(string1.split(""))];
  const caracteres2 = [...new Set(string2.split(""))];

  return caracteres1.every((c) => caracteres2.includes(c));
}

console.log(comparaString(string1, string2));
