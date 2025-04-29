// --------------------------------------
// Exercício 10 -  Ler um número inteiro e escrevê-lo 10 vezes
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número inteiro: ", (input) => {
  let num = parseInt(input);

  for (let i = 0; i < 10; i++) {
    console.log(num);
  }
  readline.close();
});
