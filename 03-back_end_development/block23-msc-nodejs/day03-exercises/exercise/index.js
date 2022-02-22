const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const productController = require('./controllers/productController');

app.use('/products', productController);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});