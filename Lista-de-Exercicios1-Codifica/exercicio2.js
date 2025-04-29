// --------------------------------------
// Exercício 2 - Classificar idade em categorias (criança, adolescente, adulto, idoso)
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a idade da pessoa: ", (input) => {
  let idade = parseInt(input);
  if (idade < 12) {
    console.log("Criança");
  } else if (idade < 18) {
    console.log("Adolescente");
  } else if (idade < 60) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
  readline.close();
});
