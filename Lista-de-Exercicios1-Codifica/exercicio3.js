// --------------------------------------
// Exercício 3 -  Classificar nota como Aprovado, Recuperação ou Reprovado
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a nota do aluno: ", (input) => {
  let nota = parseFloat(input);
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
  readline.close();
});
