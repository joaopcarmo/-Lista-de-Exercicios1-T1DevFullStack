// --------------------------------------
// Exercício 11 - Solicitar 5 números e calcular a soma total
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let contador = 0;

console.log("Digite 5 números:");

readline.on("line", (input) => {
  soma += parseFloat(input);
  contador++;

  if (contador === 5) {
    console.log("Soma total: " + soma);
    readline.close();
  }
});
