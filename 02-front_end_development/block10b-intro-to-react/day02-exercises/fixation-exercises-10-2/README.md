# Agora vamos fazer este exercício de fixação!

```jsx
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
```
Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-11-2 . Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:

1. Qual o nome do componente declarado acima?

> O nome é Image

2. Chame o componente Image , de forma que seja mostrada [esta imagem](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg), ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

# Agora, realize este exercício de fixação: (2)

Suponha que você abra uma aplicação React e se depare com os seguintes componentes:

```jsx
// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
```

```jsx
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
      </div>
    );
  }
}

export default App;
```

Crie os componentes acima dentro do diretório src do projeto fixation-exercises-11-2 , para poder fazer o exercício a seguir.
Agora, responda ao seguinte, no que diz respeito à composição de componentes:
- O que o componente App é em relação a Order ?

> Pai

- Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App .