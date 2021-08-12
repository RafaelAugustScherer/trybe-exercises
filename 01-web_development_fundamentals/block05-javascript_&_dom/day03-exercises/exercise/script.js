function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1.

/*
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  
  * Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    
  * Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  
  * Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
function fillCalendar() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let calendar = document.getElementById('days');

  for (day of dezDaysList) {
    let dayElement = document.createElement('li');
    dayElement.innerText = day;
    dayElement.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      dayElement.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayElement.classList.add('friday');
    }

    calendar.appendChild(dayElement);
  }
}

fillCalendar();

// Exercício 2

/*
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    * Adicione a este botão a ID "btn-holiday" .

    * Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createFeriadosButton(string) {
  const buttonsContainer =
    document.getElementsByClassName('buttons-container')[0];

  let feriadosButton = document.createElement('button');
  feriadosButton.id = 'btn-holiday';
  feriadosButton.innerText = string;

  buttonsContainer.appendChild(feriadosButton);
}

createFeriadosButton('Feriados');

// Exercício 3

/*
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    * É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function feriadosButtonListener() {
  let feriadosButton = document.getElementById('btn-holiday');

  feriadosButton.addEventListener('click', () => {
    let holidayDays = document.getElementsByClassName('holiday');
    let colorToApply = 'rgb(255, 255, 255)';

    if (holidayDays[0].style.backgroundColor === 'rgb(255, 255, 255)') {
      colorToApply = 'rgb(238,238,238)';
    }
    for (day of holidayDays) {
      day.style.backgroundColor = colorToApply;
    }
  });
}

feriadosButtonListener();

// Exercício 4

/*
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    * Adicione a este botão o ID "btn-friday" .
    * Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createFridayButton(string) {
  const buttonsContainer =
    document.getElementsByClassName('buttons-container')[0];

  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = string;

  buttonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

// Exercício 5

/*
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    * É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
function fridayButtonListener() {
  let fridayButton = document.getElementById('btn-friday');

  fridayButton.addEventListener('click', () => {
    let fridayDays = document.getElementsByClassName('friday');
    let textToApply = 'SEXTOU!';

    let fridayNums = [4, 11, 18, 25];

    if (fridayDays[0].innerText == textToApply) {
      for (idx = 0; idx < fridayNums.length; idx += 1) {
        fridayDays[idx].innerText = fridayNums[idx];
      }
    } else {
      for (day of fridayDays) {
        day.innerText = textToApply;
      }
    }
  });
}

fridayButtonListener();

// Exercício 6

/*
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

function zoomInDayListener() {
  let calendar = document.getElementsByClassName('days-container')[0];

  calendar.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '26px';
  });
}

function zoomOutDayListener() {
  let calendar = document.getElementsByClassName('days-container')[0];

  calendar.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
  });
}

zoomInDayListener();
zoomOutDayListener();

// Exercício 7

/*
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addTask(tarefa) {
  let myTasks = document.getElementsByClassName('my-tasks')[0];

  let elementTarefa = document.createElement('span');
  elementTarefa.innerText = tarefa;
  myTasks.appendChild(elementTarefa);
}

addTask('Louça');

// Exercício 8

/*
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
    * O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addTaskColor(color) {
  let myTasks = document.getElementsByClassName('my-tasks')[0];

  let elementLegenda = document.createElement('div');
  elementLegenda.style.backgroundColor = color;
  elementLegenda.className = 'task';

  myTasks.appendChild(elementLegenda);
}

addTaskColor('blue');

// Exercício 9

/*
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
    * Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function addTasksSelectedListener() {
  let tasks = document.getElementsByClassName('task');

  for (task of tasks) {
    task.addEventListener('click', (event) => {
      if (event.target.className == 'task selected') {
        event.target.classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    });
  }
}

addTasksSelectedListener();

// Exercício 10

/*
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
    * Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/
function assignTaskToDay(event) {
  let selected = document.getElementsByClassName('selected')[0];
  if (selected !== undefined) {
    event.target.style.color = selected.style.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119, 119, 119)';
  }
}

let daysContainer = document.getElementsByClassName('days-container')[0];

for (li of daysContainer.children) {
  li.addEventListener('click', assignTaskToDay);
}

// Bônus

/*
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
    * Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
    * Ao pressionar a tecla "enter" o evento também deverá ser disparado.
*/
function addAppointment() {
  let taskInput = document.getElementById('task-input');
  let taskList = document.getElementsByClassName('task-list-container')[0];

  if (taskInput.value == '') {
    alert('Erro: O campo de compromisso está vazio!');
  } else {
    let task = document.createElement('li');
    task.innerText = taskInput.value;

    taskList.appendChild(task);
  }
}

let btnAdd = document.getElementById('btn-add');
let taskInput = document.getElementById('task-input')

btnAdd.addEventListener('click', addAppointment);
// https://www.geeksforgeeks.org/how-to-trigger-html-button-after-hitting-enter-button-in-textbox-using-javascript/
taskInput.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        addAppointment()
    }
})
