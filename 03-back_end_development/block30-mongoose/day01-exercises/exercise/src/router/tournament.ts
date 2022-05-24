import { Router } from 'express';
import TournamentController from '../controller/tournament';

class TournamentRouter {
  public router = Router();

  constructor(
    private controller = new TournamentController(),
  ) {
    this.mapRoutes();
  }

  mapRoutes() {
    this.router.route('/tournament')
    .get(
      this.controller.getAll,
    );

    this.router.route('/tournament/:year')
      .get(
        this.controller.getByYear,
      );
  }
}

export default TournamentRouter;