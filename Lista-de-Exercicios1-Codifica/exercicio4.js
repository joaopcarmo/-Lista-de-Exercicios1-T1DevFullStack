// --------------------------------------
// Exercício 4 -  Menu interativo com switch-case
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Menu:\n1 - Crédito\n2 - Débito\n3 - PIX");

readline.question("Escolha uma opção: ", (opcao) => {
  switch (opcao) {
    case "1":
      console.log("Deseja parcelar a sua compra no crédito?");
      break;
    case "2":
      console.log("Insira o cartão de débito!");
      break;
    case "3":
      console.log("Chave PIX: 3199885522!");
      break;
    default:
      console.log("Opção inválida");
  }
  readline.close();
});
