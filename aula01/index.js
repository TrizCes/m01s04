const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 44, 56];

// Obter o tamanho do array
console.log('Tamanho do array', numeros.length);

// Adicionar elemento ao final do array
const novoTamanho = numeros.push(45);
console.log('Array com push', novoTamanho);

// Remover ultimo elemento do array
const elementoRemovido = numeros.pop();
console.log('Array pop', elementoRemovido);

// Remover primeiro elemento do array
const elementoRemovidoShift = numeros.shift();
console.log('Array com shift', elementoRemovidoShift);
// console.table(numeros);

// Adicionar elemento no inicio do array
const novoTamanhoUnShift = numeros.unshift(80);
console.log('Array com unshift', novoTamanhoUnShift);

// Obter parte de um array
const pedaco = numeros.slice(1, 3);
console.log('numeros:', numeros);
console.log('Array com slice', pedaco);

// Deletar parte de um array
const deletado = numeros.splice(1, 2);
console.log('numeros:', numeros);
console.log('Array com splice', deletado);

// Adicionar item em indice específico
numeros.splice(1, 0, 300);
console.log('Array com splice + adição', numeros);

// Transformar array em string com separador
const numerosSemSep = numeros.join();
console.log('Array com Join sem separador', numerosSemSep);

const numerosComSep = numeros.join(', ');
console.log('Array com Join com separador', numerosComSep);

// Percorrer array
const numerosDobrados = [];
numeros.forEach((elemento, indice) => {
  numerosDobrados.push(elemento * 2);
});

// numeros.forEach(function (elemento, indice) {
//   numerosDobrados.push(elemento * 2);
// });

// function duplicar(elemento) {
//   numerosDobrados.push(elemento * 2);
// }
// numeros.forEach(duplicar);

console.log('Numeros', numeros);
console.log('Numeros dobrados', numerosDobrados);

// Percorrer um array, retornando um novo array modificado
const numerosTriplicado = numeros.map((elemento) => elemento * 3);
// const numerosTriplicado = numeros.map(function (elemento) {
//   return elemento * 3;
// });
console.log('Números triplicados com map', numerosTriplicado);

// Encontrar o primeiro elemento que corresponda ao filtro
const numeroEncontrado = numeros.find((elemento) => elemento % 2 !== 0);
console.log('Numero encontrado com Find', numeroEncontrado);

// Encontrar elementos que correspondam ao filtro
const numerosEncontrados = numeros.filter((elemento) => elemento % 2 !== 0);
console.log('Números encontrados com filter', numerosEncontrados);

// Verificar se ao menos um item corresponde ao filtro
const correspondeSome = numeros.some((elemento) => elemento % 2 !== 0);
console.log('Corresponde com some', correspondeSome);

// Verificar se ao menos um item corresponde ao filtro
const correspondeEvery = numeros.every((elemento) => elemento % 2 !== 0);
console.log('Corresponde com every', correspondeEvery);

// Retornar um único valor
const soma = numeros.reduce((acc, elemento) => (acc += elemento));

// const soma = numeros.reduce((acc, elemento) => {
//   if (elemento % 2 !== 0) {
//     return (acc = acc + elemento);
//   }

//   return acc;
// }, 0);
console.log('Soma com reduce', soma);

const aluno = {
  id: 1,
  nome: 'Thais',
  turmas: [
    {
      id: 1,
      nome: 'Audaces',
    },
    {
      id: 2,
      nome: 'DevInHouse',
    },
  ],
  teste: 'asalskals',
};
console.log('Objeto', aluno.teste);

// Deletar propriedade objeto
delete aluno.teste;

console.log('Objeto com prop deletada', aluno);

// Adicionar metodo
aluno.imprimeTurma = function () {
  console.log(this.turmas.map((turma) => turma.nome).join());
  //   console.log(aluno.turmas.map((turma) => turma.nome).join());
};

aluno.imprimeTurma();

// Obter nomes das chaves de um objeto
const chaves = Object.keys(aluno);
console.log('Object.keys', chaves);

chaves.forEach((chave) => {
  console.log(chave, aluno[chave]);
});

// Obter chave e valor objeto
const chaveValor = Object.entries(aluno);

console.log('Object.entries', JSON.stringify(chaveValor));
