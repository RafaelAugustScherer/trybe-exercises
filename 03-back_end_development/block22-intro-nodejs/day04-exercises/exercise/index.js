const express = require('express');
const bodyParser = require('body-parser');
const simpsons = require('./simpsons');

const app = express();
app.use(bodyParser.json());


// 1
app.get('/ping', (_req, res) => {
  return res.status(200).send({ message: 'pong' });
});

// 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).send({ message: `Hello, ${name}!` });
});

// 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  return age > 17
    ? res.status(200).send({ message: `Hello, ${name}!` })
    : res.status(401).send({ message: 'Unauthorized' });
});

// 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).send({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.use(simpsons);

app.listen(3001, () => console.log('server is up!'));