/*
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.

Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.

Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.

As pessoas devem ter o poder de alterar:
    * Cor de fundo da tela;
    * Cor do texto;
    * Tamanho da fonte;
    * Espaçamento entre as linhas do texto;
    * Tipo da fonte ( Font family ).

Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
*/


window.onload = () => {
  if (localStorage.getItem('bodyColor')) {
    document.body.style.backgroundColor = localStorage.getItem('bodyColor');
  }
  if (localStorage.getItem('textColor')) {
    let links = document.querySelectorAll('a.text');

    for (link of links) {
      link.style.color = localStorage.getItem('textColor');
    }
    document.body.style.color = localStorage.getItem('textColor');
  }
  if (localStorage.getItem('fontSize')) {
    let mainText = document.getElementsByClassName('main-text')[0];
    mainText.style.fontSize = localStorage.getItem('fontSize');
  }
  if (localStorage.getItem('fontFamily')) {
    let mainText = document.getElementsByClassName('main-text')[0];
    mainText.style.fontFamily = localStorage.getItem('fontFamily');
  }
  if (localStorage.getItem('lineHeight')) {
    let mainText = document.getElementsByClassName('main-text')[0];
    mainText.style.lineHeight = localStorage.getItem('lineHeight');
  }
};

function changeBodyColor(event) {
  localStorage.bodyColor = event.target.style.backgroundColor;
  document.body.style.backgroundColor = localStorage.getItem('bodyColor');
}

function changeTextColor(event) {
  let links = document.querySelectorAll('a.text');
  localStorage.textColor = event.target.style.backgroundColor;

  for (link of links) {
    link.style.color = localStorage.getItem('textColor');
  }
  document.body.style.color = localStorage.getItem('textColor');
}

function changeFontSize(event) {
  let mainText = document.getElementsByClassName('main-text')[0];
  localStorage.fontSize = event.target.style.fontSize;
  mainText.style.fontSize = localStorage.getItem('fontSize');
}

function changeFontFamily(event) {
  let mainText = document.getElementsByClassName('main-text')[0];
  localStorage.fontFamily = event.target.style.fontFamily;

  mainText.style.fontFamily = localStorage.getItem('fontFamily');
}

function changeLineHeight(event) {
  let mainText = document.getElementsByClassName('main-text')[0];
  localStorage.lineHeight = event.target.style.lineHeight;

  mainText.style.lineHeight = localStorage.getItem('lineHeight');
}

function createBox(color) {
  let box = document.createElement('a');
  box.href = '#';
  box.className = 'box';
  box.style.backgroundColor = color;
  return box;
}

function createFontSize(size) {
  let text = document.createElement('a');
  text.href = '#';
  text.className = 'text';
  text.innerText = 'Aa';
  text.style.fontSize = size;

  return text;
}

function createTextFamily(family) {
  let text = document.createElement('a');
  text.href = '#';
  text.className = 'text';
  text.innerText = 'ABC abc';
  text.style.fontFamily = family;

  return text;
}

function createTextSpacing(space) {
  let text = document.createElement('a');
  text.href = '#';
  text.className = 'text';
  text.innerText = 'Lorem\nIpsum';
  text.style.lineHeight = space;

  return text;
}

// Create color boxes

let boxesColors = ['red', 'green', 'blue', 'white', 'black'];

for (color of boxesColors) {
  let boxesContainers = document.getElementsByClassName('boxes-container');

  for (container of boxesContainers) {
    container.appendChild(createBox(color));
  }
}

// Create text size boxes

let fontSizes = ['small', 'medium', 'large', 'x-large', 'xx-large'];

for (size of fontSizes) {
  let fontSizeContainer = document.querySelector('.font-size .text-container');

  fontSizeContainer.appendChild(createFontSize(size));
}

// Create font family boxes

let fontFamilies = ['fantasy', 'serif', 'sans-serif', 'system-ui'];
let fontFamilyContainer = document.querySelector(
  '.font-family .text-container'
);

for (family of fontFamilies) {
  fontFamilyContainer.appendChild(createTextFamily(family));
}

// Create text spacing boxes

let textSpacing = ['1', '1.25', '1.5', '1.75', '2'];
let textSpacingContainer = document.querySelector(
  '.text-spacing .text-container'
);

for (space of textSpacing) {
  textSpacingContainer.appendChild(createTextSpacing(space));
}

// Add listener for changing body color

const bgColorBoxes = document.querySelectorAll('.bg-color .box');

for (box of bgColorBoxes) {
  box.addEventListener('click', changeBodyColor);
}

// Add listener for changing text color

const textColorBoxes = document.querySelectorAll('.text-color .box');

for (box of textColorBoxes) {
  box.addEventListener('click', changeTextColor);
}

// Add listener for changing font size

const fontSizeText = document.querySelectorAll('.font-size .text');

for (text of fontSizeText) {
  text.addEventListener('click', changeFontSize);
}

// Add listener for changing font family

const fontFamilyText = document.querySelectorAll('.font-family .text');

for (text of fontFamilyText) {
  text.addEventListener('click', changeFontFamily);
}

// Add listener for changing text spacing

const textSpacingText = document.querySelectorAll('.text-spacing .text');

for (text of textSpacingText) {
  text.addEventListener('click', changeLineHeight);
}
