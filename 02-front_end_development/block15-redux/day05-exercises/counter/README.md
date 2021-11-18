# Testando Redux

Quando conectamos o Redux ao React, algumas alterações são necessárias pra que a aplicação funcione. Um exemplo é o Provider . Como já visto, é ele quem provê o acesso ao estado de um reducer para os componentes.
Quando fazemos testes em React , o primeiro passo é renderizar um componente no ambiente simulado dos testes. Geralmente esse componente é o App.js . Por causa do necessário uso do Provider em aplicações react-redux, no momento dos testes também temos que utilizar o Provider , ou ficaremos sem o acesso ao state .
Você se lembra da função renderWithRouter utilizada para renderizar componentes que trafegam entre rotas? Para o Redux, temos uma função parecida, chamada renderWithRedux :
```js
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
```
A função renderWithRedux recebe um componente como primeiro parâmetro e desconstrói um objeto como o segundo. Ele obtém o valor de uma chave initialState desse objeto e o armazena em uma variável com o mesmo nome. Além disso, ele atribui um valor padrão para a chave store , e esse valor é uma nova store criada com um reducer importado e o initialState que você acabou de desconstruir. Leia esta função com calma para ter certeza que você entendeu.
Então, isso basicamente renderiza o componente envolvido pela store que você criou para o contexto do seu teste. Ela também retorna a própria store , caso você precise acessá-la diretamente em seu teste. Em resumo: a função renderWithRedux acrescenta ao seu componente renderizado um store criado para os testes. Veremos como fazer isso mais a frente!
Vamos utilizar de exemplo um contador de cliques para criar os testes, rode os comandos e faça as alterações necessárias nos arquivos descritos.
Crie o contador a partir de npx create-react-app e após instale o redux e o react-redux com o comando npm install redux react-redux . Agora crie e/ou altere os arquivos abaixo:

```js
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}
export default App;
```

```js
// src/ButtonClicks.js
import React from 'react';
import { connect } from 'react-redux';
import addClick from './actions';
class ButtonClicks extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.add}>Clique aqui</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addClick())});
export default connect(null, mapDispatchToProps)(ButtonClicks);
```

```js
// src/NumberClicks
import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

const mapStateToProps = state => ({
  counter: state.clickReducer.counter});

export default connect(mapStateToProps)(NumberClicks);
```

```js
// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;
```

```js
// src/reducers/index.js
const Initial_State = {
  counter: 0,
};
function clickReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_CLICK':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}
export default clickReducer;
```

```js
// src/actions/index.js
const addClick = () => ({ type: 'ADD_CLICK' });

export default addClick;
```
Teste a aplicação utilizando o npm start , se tudo estiver funcionando corretamente, você ja pode seguir e começar a criar os testes abaixo.
Para utilizar a função renderWithRedux em nossos testes, é necessário também fazer alguns imports :

```js
import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
```
Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store .
Um detalhe muito importante: como é utilizado um combineReducers na resolução do exercício, quando formos implementar os testes, temos que criar o store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers e adaptar a função renderWithRedux para utilizá-lo.

```js
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
```
Outro detalhe que pode ser notado é que, no caso, nosso reducer se chama clickReducer , por isso temos que importá-lo e usá-lo com o nome correto.
Por último, mais uma mudança é necessária. Você aprendeu a utilizar o Redux colocando o Provider no arquivo App.js mas, para que os testes funcionem, é necessário que movamos o Provider para o index.js . Afinal de contas, nós precisamos ignorar o store provido na aplicação em favor do store que nossos testes proveem (e que podemos controlar!). Repare, portanto, que se renderizamos o componente <App /> nos testes nós não renderizamos o store da aplicação, que está fora desse componente. Assim ficamos livres para criar um novo store que podemos controlar no ambiente de testes!

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```
Pronto! Adaptações feitas, vamos para os testes!
Como primeiro teste, vamos averiguar se o botão Clique aqui e o texto "0" estão na tela.

```js
describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});
```
Bastou usar a função renderWithRedux no lugar do render , que os testes ocorreram perfeitamente. Note que não passamos valor inicial algum para o clickReducer e por isso ele utilizou o valor padrão 0, definido no código da aplicação.
Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state . Isto é:

```js
const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
```
Observe: o objeto initialState representa o valor inicial do state . O clickReducer representa o reducer criado. O counter representa a propriedade que criamos dentro do nosso reducer . Vamos testar essa alteração no estado inicial:

```js
test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
```

## Para fixar

Utilize o mesmo exemplo acima do contador de cliques.

1. Crie um teste com o valor padrão do reducer e teste se um clique funciona.

2. Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.