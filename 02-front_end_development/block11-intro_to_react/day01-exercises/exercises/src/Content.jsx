import { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];


class Content extends Component {
    render() {
        const resultado = conteudos.map(({ conteudo, bloco, status }) => (
            <ul key={conteudo}>
                <li key={conteudo}>O conteúdo é: { conteudo }</li>
                <li key={status}>Status: { status }</li>
                <li key={bloco}>Bloco: { bloco }</li>
            </ul>
        ));
        return (
            <main className="App-main">
                { resultado }
            </main>
        )
    }
}

export default Content;