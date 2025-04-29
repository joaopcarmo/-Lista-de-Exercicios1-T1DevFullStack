// --------------------------------------
// Exercício 5 -  Calcular IMC e determinar categoria de peso
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o peso (kg): ", (pesoInput) => {
  readline.question("Digite a altura (m): ", (alturaInput) => {
    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
      console.log("Baixo peso");
    } else if (imc < 25) {
      console.log("Peso normal");
    } else if (imc < 30) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }

    readline.close();
  });
});
