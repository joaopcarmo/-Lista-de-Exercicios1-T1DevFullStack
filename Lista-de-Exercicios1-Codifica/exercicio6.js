// --------------------------------------
// Exercício 6 -  Verificar tipo de triângulo (Isósceles, Escaleno, Equilátero)
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Lado A: ", (a) => {
  readline.question("Lado B: ", (b) => {
    readline.question("Lado C: ", (c) => {
      let A = parseFloat(a),
        B = parseFloat(b),
        C = parseFloat(c);

      if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
          console.log("Equilátero");
        } else if (A === B || A === C || B === C) {
          console.log("Isósceles");
        } else {
          console.log("Escaleno");
        }
      } else {
        console.log("Não forma triângulo");
      }

      readline.close();
    });
  });
});
