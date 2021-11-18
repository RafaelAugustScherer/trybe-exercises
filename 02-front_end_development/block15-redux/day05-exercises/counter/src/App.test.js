import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './redux/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a reducer manipulation should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('a click in the button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = screen.getByRole('button', { name: 'Clique aqui' });

    buttonAdicionar.click();
    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('higher values should be rendered normally', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = screen.getByRole('button', { name: 'Clique aqui' });

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('10')).toBeInTheDocument();
    buttonAdicionar.click();

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('11')).toBeInTheDocument();
  });
});