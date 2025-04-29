// --------------------------------------
// Exercício 8 -  Ler dois valores e exibi-los em ordem crescente
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Primeiro valor: ", (v1) => {
  readline.question("Segundo valor: ", (v2) => {
    let a = parseFloat(v1),
      b = parseFloat(v2);

    console.log(a < b ? `${a}, ${b}` : `${b}, ${a}`);

    readline.close();
  });
});
