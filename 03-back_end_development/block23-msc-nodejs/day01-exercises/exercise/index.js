const express = require('express');

const app = express();
app.use(express.json());

const userController = require('./controller/user');
const error = require('./middleware/error');

app.use('/user', userController);
app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});