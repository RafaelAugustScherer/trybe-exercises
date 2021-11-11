function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// 2, 3
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  let { index, colors } = state;
 
  switch(action.type) {
    case 'NEXT_COLOR':
      index = index === colors.length - 1 ? 0 : index + 1;
      return { ...state, index };
    case 'PREVIOUS_COLOR':
      index = index === 0 ? colors.length - 1 : index - 1;
      return { ...state, index };
    case 'RANDOM_COLOR':
      colors.push(criarCor());
      return { colors, index: colors.length - 1 };
    default:
      return state;
  }
}

// 1
const store = Redux.createStore(reducer);

// 3
const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const randButton = document.getElementById('random');

const NextColor = () => ({
  type: 'PREVIOUS_COLOR',
});

const prevColor = () => ({
  type: 'NEXT_COLOR',
});

const randomColor = () => ({
  type: 'RANDOM_COLOR',
  newColor: criarCor(),
});


prevButton.addEventListener('click', () => {
  store.dispatch(prevColor());
});

nextButton.addEventListener('click', () => {
  store.dispatch(NextColor());
});

randButton.addEventListener('click', () => {
  store.dispatch(randomColor());
});

const colorSpan = document.getElementById('value');
const container = document.getElementById('container');

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorSpan.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
});