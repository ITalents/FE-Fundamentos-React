let numeros = [1,2,3,4,5];
let nomes = ['Joao', 'Maria', 'José'];

let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(numeros[0]);
console.log(nomes[1]);

// adiciona um numero no final do array
numeros.push(6);
console.log(numeros);  // 1, 2, 3, 4, 5, 6

//remove um numero do final do array
numeros.pop();
console.log(numeros); //1, 2, 3, 4, 5 

// Adiciona um valor no inicio do array
numeros.unshift(0);
console.log(numeros); //0, 1, 2, 3, 4, 5

// Remove o primeiro valor do array
numeros.shift();
console.log(numeros); //1, 2, 3, 4, 5

// array com os valores dobrados
let numeros_dobrados = numeros.map((numero) => {
  console.log(numero);
  return numero * 2;
})
console.log(numeros_dobrados);

// filtrar apenas os numeros pares
let numeros_pares = numeros.filter((numero) => {
  return numero % 2 === 0;
})
console.log(numeros_pares);

// somando os valores de um array
// 1,2,3,4,5
const soma = numeros.reduce((accumulator, numero) => {
  console.log('accumulator', accumulator);
  console.log('numero', numero);
  return accumulator + numero;
}, 0)
console.log('total da soma dos numeros do array', soma);