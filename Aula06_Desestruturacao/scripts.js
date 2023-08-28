const arr = ['Joao', 'Jose', 'Maria'];

const [a, b, c] = arr;

console.log(a,b,c)

const obj = {
  nome: 'Joao',
  idade: 20
}

const {nome: NomeCompleto, idade: anos} = obj;
console.log(NomeCompleto);
console.log(anos);

const pessoa = { nome: 'Maria'};
const {nome, idade = 18} = pessoa;
console.log(nome);
console.log(idade);

function calculaIdade({anoAtual, anoNascimento}) {
  return anoAtual - anoNascimento;
}

const pessoa2 = { anoNascimento: 2000, anoAtual: 2023 }
console.log(calculaIdade(pessoa2))