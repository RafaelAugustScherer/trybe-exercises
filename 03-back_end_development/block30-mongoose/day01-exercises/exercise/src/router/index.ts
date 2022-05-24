import { Router } from 'express';
import TournamentRouter from './tournament';

class AppRouter {
  public router = Router();

  constructor(
    private routers = [new TournamentRouter()],
  ) {
    this.config();
  }

  config() {
    this.routers.forEach(({ router }) => {
      this.router.use(router);
    });
  }
}

export default AppRouter;