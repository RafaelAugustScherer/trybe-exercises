import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const RandomNumber = () => Math.floor(Math.random() * 101);

  const [screenNumber, setScreenNumber] = useState();
  const [timer, setTimer] = useState();
  const [okText, setOkText] = useState('Acerto');

  //componentDidMount
  useEffect(() => {
    const testNumber = () => {
      if (screenNumber % 3 === 0 || screenNumber % 5 === 0) {
        setOkText('Acerto');
        setTimeout(() => {
          setOkText('')
        }, 4000);
      }
    };

    setScreenNumber(RandomNumber());
    testNumber();

    setTimer(
      setInterval(() => {
        setScreenNumber(RandomNumber());
        console.log('tst');
        testNumber();
      }, 10000)
    );
  }, []);

  //componentWillUnmount
  useEffect(() => () => clearInterval(timer), [timer]);

  return (
    <div className="App">
      {screenNumber}
      {okText}
    </div>
  );
}

export default App;
