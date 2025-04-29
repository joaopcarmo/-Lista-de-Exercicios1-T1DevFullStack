// --------------------------------------
// Exercício 1 - Verificar se número é par ou ímpar
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número inteiro: ", (input) => {
  let numero = parseInt(input);

  if (numero % 2 === 0) {
    console.log("O número " + numero + " é PAR.");
  } else {
    console.log("O número " + numero + " é ÍMPAR.");
  }
  readline.close();
});
