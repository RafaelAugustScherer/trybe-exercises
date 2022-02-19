const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const pingMiddleware = require('./middlewares/ping');
app.get('/ping', pingMiddleware);

const { cepRouter } = require('./controllers/routes');
app.use('/cep', cepRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is up at ' + PORT))