const readLine = require('readline-sync');

const randomNumber = () => Math.round(Math.random() * 10);

const play = () => {
  const guess = readLine.questionInt('Adivinhe um numero entre 0 e 10: ');
  const number = randomNumber();
  
  if (number === guess) console.log('Parabens, numero correto!');
  else console.log(`Opa, nao foi dessa vez. O numero era ${number}`);

  let playAgain = '';
  while (playAgain !== 'Sim' && playAgain !== 'Nao') {
    playAgain = readLine.question('Quer jogar novamente? (Sim / Nao) ');
  }
  if (playAgain === 'Sim') play();
}
play();