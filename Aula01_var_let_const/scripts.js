// var, let e const
var nome = 'Ivo';
var nome = 'Maria';

function saudacao() {
  var mensagem = "olá";
  console.log(mensagem);
}

if(true) {
 var nome = 'joao';
}

console.log(nome); //Maria
// console.log(mensagem); //erro
saudacao();

console.log(texto);
var texto = 'teste';


//let

let telefone = '9999999';

console.log(telefone);

if(true) {
  let telefone2 = '999999';
  let telefone = '5555555';
  console.log(telefone2);
  console.log(telefone);
}

// console.log(text);
// let lext = 'meu texto';

//const

const mensagem = 'Olá';
// mensagem = 'Bom dia';
console.log(mensagem) //Olá;

const contato = {
  nome: 'Ivo',
  telefone: '5555555'
}

contato.nome = 'Maria';
console.log(contato);

