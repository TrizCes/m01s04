// GetByTag
const titulos = document.getElementsByTagName('h1');
titulos[0].innerText = 'Texto alterado';

// GetByID
const titulo1 = document.getElementById('titulo1');
titulo1.style.color = 'red';

// GetByName
const titulosName = document.getElementsByName('titulo');
titulosName[1].style.color = 'blue';

// GetByClass
const titulosErros = document.getElementsByClassName('erro');
for (let index = 0; index < titulosErros.length; index++) {
  titulosErros[index].style.fontSize = '12px';
}

// Array.from(titulosErros).forEach((element) => {
//   element.style.fontSize = '12px';
// });

// QuerySelector
const tituloSelector = document.querySelector('h1#titulo1');
tituloSelector.style.fontSize = '24px';

// QuerySelectorAll
const titulosSelector = document.querySelectorAll('.erro');
titulosSelector.forEach((element) => {
  element.style.fontSize = '36px';
  element.innerText = `${element.innerText} + texto novo`;
});
