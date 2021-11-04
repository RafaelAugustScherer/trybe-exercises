import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Teste da aplicação toda', () => {
  const mockedAPIResponse = [{
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
    name: "Agumon"
  }];
  global.fetch = async () => ({ json: async () => mockedAPIResponse }); 

  it('renders App', async () => {
    render(<App />);
    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');
    
    userEvent.type(input, 'Agumon');
    userEvent.click(button);

    const digimonName = await screen.findByTestId('digimonName');
    const digimonImage = await screen.findByRole('img', {src: 'https://digimon.shadowsmith.com/img/agumon.jpg'});

    expect(digimonName).toBeInTheDocument();
    expect(digimonImage).toBeInTheDocument();
  });
});
