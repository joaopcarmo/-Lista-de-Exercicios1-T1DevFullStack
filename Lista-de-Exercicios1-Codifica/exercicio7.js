// --------------------------------------
// Exercício 7 -   Calcular valor total da compra de maçãs
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de maçãs: ", (input) => {
  let qtd = parseInt(input);
  let preco = qtd < 12 ? 0.3 : 0.25;

  console.log("Total: R$ " + (qtd * preco).toFixed(2));

  readline.close();
});
