const Express = require('express');

const app = Express();
const userRoutes = require('./ex1');
const btcRoutes = require('./ex2');
const teamsRoutes = require('./ex4');

app.use(Express.json());
app.use('/user', userRoutes);
app.use('/btc', btcRoutes);
app.use('/teams', teamsRoutes);

app.listen(3001, () => console.log('server is up'));