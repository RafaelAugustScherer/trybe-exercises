import { RequestHandler } from 'express';
import TournamentService from '../service/tournament';


class TournamentController {

  constructor(
    private service = new TournamentService(),
  ) {}

  getAll:RequestHandler = async (_req, res) => {
    const response = await this.service.getAll();

    return res.status(200).json(response);
  }

  getByYear:RequestHandler = async (req, res) => {
    const { year } = req.params;
    const response = await this.service.getByYear(year);

    if (!response) {
      return res.status(404).json({
        message: 'Não teve copa do mundo no ano informado :('
      });
    }

    return res.status(200).json(response);
  }
}

export default TournamentController;