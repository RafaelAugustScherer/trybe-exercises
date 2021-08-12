const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/* Exemplos */

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

/* Exercícios */

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTechClass(event) {
  input.value = '';

  let targetParent = event.target.parentElement;
  for (li of targetParent.children) {
    if (li.id == event.target.id) {
      li.classList.add('tech');
    } else {
      li.classList.remove('tech');
    }
  }
}

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function addTextForTech(event) {
  let techLi = document.getElementsByClassName('tech')[0];

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#client-side_validation
  techLi.innerText = event.target.value;
}

input.addEventListener('keyup', addTextForTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
function redirectOnClick(event) {
  window.location.href = 'https://rafaelaugustscherer.github.io';
}

myWebpage.addEventListener('click', redirectOnClick);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function changeColor(event) {
  let randomNumbers = [];
  for (idx = 0; idx < 3; idx += 1) {
    randomNumbers.push(Math.floor(Math.random() * 255));
  }
  let randomColor = `rgb(${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]})`;

  event.target.style.color = randomColor;
}

myWebpage.addEventListener('mouseover', changeColor);
