class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudacao() {
    console.log(`olá, me chamo ${this.nome} e tenho ${this.idade} anos`);
  }
}

const pessoa1 = new Pessoa('Maria', 25);
const pessoa2 = new Pessoa('Joao', 12);
pessoa1.saudacao();
pessoa2.saudacao();

class Aluno extends Pessoa {
  constructor(nome, idade, anoEscolar) {
    super(nome, idade);
    this.anoEscolar = anoEscolar
  }

  saudacao() {
    console.log(`olá, me chamo ${this.nome} e tenho ${this.idade} anos e estou no ${this.anoEscolar} ano`)
  }
}

const aluno = new Aluno('Carlos', 8, 3);
aluno.saudacao();