import express from 'express';
import createConnection from './model/connection';
import AppRouter from './router';

class App {
  private app = express();

  constructor(
    private router = new AppRouter().router,
  ) {
    this.config();
  }

  config() {
    this.app.use(express.json());
    this.app.use(this.router);

    createConnection();
  }

  start() {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => console.log(`App listening at ${port}`));
  }
}

export default App;