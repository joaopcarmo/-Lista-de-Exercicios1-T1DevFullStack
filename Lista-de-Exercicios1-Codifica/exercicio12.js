// --------------------------------------
// Exercício 12 - Exibir tabuada de um número (1 a 10)
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número para ver a tabuada: ", (input) => {
  let n = parseInt(input);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
  readline.close();
});
