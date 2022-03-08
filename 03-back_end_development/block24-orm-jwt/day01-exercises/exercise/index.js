const express = require('express');

const app = express();

const bookRouter = require('./controllers/bookController');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(bookRouter);
app.use(errorMiddleware);

app.listen(3000, () => console.log('Server is running on port 3000'));