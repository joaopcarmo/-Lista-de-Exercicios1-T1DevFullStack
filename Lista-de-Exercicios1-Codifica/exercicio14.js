// --------------------------------------
// Exercício 14 - Calcular fatorial de um número
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número para calcular o fatorial: ", (input) => {
  let num = parseInt(input);
  let fat = 1;

  for (let i = 1; i <= num; i++) {
    fat *= i;
  }
  console.log(`Fatorial de ${num} é ${fat}`);

  readline.close();
});
