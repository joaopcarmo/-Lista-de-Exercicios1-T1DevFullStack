// --------------------------------------
// Exercício 15 - Gerar primeiros 10 números da sequência de Fibonacci
// Lista de Exercícios 1 - Codifica - Formação Desenvolvedor Full Stack Júnior
// -------------------------------------

let a = 0,
  b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}
