const { combineReducers, createStore } = Redux;

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  const { nome, sobrenome, type } = action;

  switch (type) {
    case 'CHANGE_FIRST':
      return {...state, nome, sobrenome };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  const { nome, sobrenome, type } = action;

  switch (type) {
    case 'CHANGE_SECOND':
      return {...state, nome, sobrenome };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = createStore(rootReducer);

const changeFirst = (nome, sobrenome) => ({
  type: 'CHANGE_FIRST',
  nome,
  sobrenome,
});

const changeSecond = (nome, sobrenome) => ({
  type: 'CHANGE_SECOND',
  nome,
  sobrenome,
});

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeFirst('Rodrigo', 'Wolf'));
    store.dispatch(changeSecond('Isaac', 'Batista'));
  }, 3000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  Object.entries(meuPrimeiroReducer).forEach(([field, value]) => {
    const DOMField = document.getElementById(`${field}-1`);
    DOMField.innerHTML = value;
  });

  Object.entries(meuSegundoReducer).forEach(([field, value]) => {
    const DOMField = document.getElementById(`${field}-2`);
    DOMField.innerHTML = value;
  });
})