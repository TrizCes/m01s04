// Função para trocar cor do titulo ao clicar no botão
function cliqueBotao() {
  const titulo = document.getElementById('titulo');
  titulo.style.color = 'red';
}

// Criar botão e adicionar evento de click
const botao = document.createElement('button');
botao.innerText = 'Botão 2';
botao.onclick = cliqueBotao;
// Adicionando o elemento criado no DOM
document.body.appendChild(botao);

//Função para simular a busca de um cep
const buscaCep = (cep) => {
  alert(`CEP: ${cep} Rua teste n 10`);
};

//Input para evento de onblur
const inputCep = document.createElement('input');
inputCep.onblur = (event) => {
  console.log(event);
  console.log(event.target.type);
  buscaCep(event.target.value);
};
inputCep.placeholder = 'Digite o CEP';
document.body.appendChild(inputCep);

// {
//     type: 'blur'
//     target: {
//         value: 'asas',
//     }
// }

// Evento de teclado
const inputKey = document.createElement('input');
inputKey.onkeyup = (evento) => {
  console.log(evento);
};
document.body.appendChild(inputKey);

// Evento de formulário
const formCadastro = document.getElementById('cadastro');
formCadastro.onsubmit = (event) => {
  event.preventDefault();

  //document.getElementById('nome')
  //Obtem os valores digitados nos inputs
  const nome = event.target.nome.value;
  const idade = event.target.idade.value;

  // Cria um list item para adicionar na lista
  const item = document.createElement('li');
  item.classList.add('listItem');
  item.innerText = `${nome} - ${idade}`;

  item.onclick = function () {
    if (this.classList.contains('listItem')) {
      this.classList.remove('listItem');
    } else {
      this.classList.add('listItem');
    }
  };

  // Adicionar o list iten criado na lista no DOM
  const lista = document.getElementById('lista');
  lista.appendChild(item);

  console.log(nome, idade);
};

// Criar um h1 na tela
function criaH1() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Texto teste';
  document.body.appendChild(h1);
}

// Adiciona event listener
const buttonAddListener = document.createElement('button');
buttonAddListener.innerText = 'Add Listener';
buttonAddListener.addEventListener('click', criaH1);
document.body.appendChild(buttonAddListener);

// Remove event listener
const buttonRemoveListener = document.createElement('button');
buttonRemoveListener.innerText = 'Remove Listener';
buttonRemoveListener.addEventListener('click', () => {
  buttonAddListener.removeEventListener('click', criaH1);
});
document.body.appendChild(buttonRemoveListener);
