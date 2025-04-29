// --------------------------------------
// Exercício 13 - Calcular média de números decimais até digitar 0
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let contador = 0;

console.log("Digite números decimais (digite 0 para terminar):");

readline.on("line", (input) => {
  let numero = parseFloat(input);

  if (numero === 0) {
    if (contador > 0) {
      console.log("Média: " + soma / contador);
    } else {
      console.log("Nenhum valor válido inserido.");
    }
    readline.close();
  } else {
    soma += numero;
    contador++;
  }
});
