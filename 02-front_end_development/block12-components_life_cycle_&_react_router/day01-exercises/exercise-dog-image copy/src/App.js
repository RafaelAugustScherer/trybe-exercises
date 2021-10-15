import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      dogName: '',
      dogImage: undefined,
    };
  }

  componentDidMount() {
    const dogInfo = JSON.parse(localStorage.getItem('dogInfo'));
    console.log(dogInfo)
    dogInfo
      ? this.setState({ dogName: dogInfo[0], dogImage: dogInfo[1] })
      : this.fetchDogImage();
  }

  shouldComponentUpdate(_nextProps, { dogImage }) {
    return dogImage ? !dogImage.includes('terrier') : true;
  }

  fetchDogImage = async () => {
    this.setState({
      loading: true,
    });

    const ApiResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const { message } = await ApiResponse.json();

    alert(message.split('/')[4]);

    this.setState({
      dogImage: message,
      loading: false,
    });
  };

  saveDog = () => {
    const { dogName, dogImage } = this.state;
    localStorage.setItem('dogInfo', JSON.stringify([dogName, dogImage]));
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({
      dogName: value,
    });
  };

  render() {
    const { loading, dogImage, dogName } = this.state;
    const loadingSpan = <span>Loading Doguinho...</span>;
    return (
      <div className="App">
        {loading ? (
          loadingSpan
        ) : (
          <img src={dogImage} alt={dogName ? dogName : 'Doguinho'} className="dogImage" />
        )}
        <input
          type="text"
          placeholder="Nomeie o Doguinho..."
          onChange={this.onInputChange}
          value={dogName}
        />
        <button onClick={this.saveDog}>Salvar</button>
        <button onClick={this.fetchDogImage}>Generate Doguinho</button>
      </div>
    );
  }
}

export default App;
