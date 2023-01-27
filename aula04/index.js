const tarefas = [];
//ao cadastrar nova atividade criamos novos elementos apartir do js
const formCadastro = document.getElementById('form-cadastro');
/*cadastro de tarefas no html > DOM >JS
 =execulta e atraves da submissão execultamos a função de criação de atividades*/
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault(); //impede de recaregar pagina html
  const tarefa = {
    id: new Date().getTime(),
    titulo: event.target.titulo.value,
    prioridade: event.target.prioridade.value,
    descricao: event.target.descricao.value,
    concluida: false,
  };

  tarefas.push(tarefa);
  console.log(tarefas);
});

const listaTarefas = () => {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const titulo = document.createElement('h3');
  titulo.classList.add('subtitle', 'text-center');
  titulo.innerText = '';
  listItem.appendChild(titulo);

  const prioridade = document.createElement('p');
  prioridade.classList.add('text-center', 'priority', 'color-red');
  prioridade.innerText = '';
  listItem.appendChild(prioridade);

  const descricao = document.createElement('p');
  descricao.classList.add('description');
  descricao.innerText = '';
  listItem.appendChild(descricao);

  const div = document.createElement('div');
  div.classList.add('list-item-footer');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'concluida';
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('change', () => {
    console.log('clicou');
  });
  div.appendChild(checkbox);

  // Adiciona a div no li
  listItem.appendChild(div);

  // Adiciono o li na ul
  lista.appendChild(listItem);
};

document.body.onload = listaTarefas();

const obterPrioridade = (idPrioridade) => {
  if (idPrioridade === 0) {
    return {
      nome: 'Alta',
      classe: 'color-red',
    };
  } else if (idPrioridade === 1) {
    return {
      nome: 'Média',
      classe: 'color-yellow',
    };
  } else if (idPrioridade === 2) {
    return {
      nome: 'Baixa',
      classe: 'color-green',
    };
  }
};
