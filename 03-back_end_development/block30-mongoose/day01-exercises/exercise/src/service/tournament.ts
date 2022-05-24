import { model as createModel, ObjectId } from 'mongoose';
import { ITournament } from '../interface/tournament';
import TournamentSchema from '../schema/tournament';


class TournamentService {

  constructor(
    private model = createModel<ITournament>('tournaments', TournamentSchema)
  ) {}

  async getAll(): Promise<ITournament[] | null> {
    return this.model.find();
  }

  async getByYear(year: string | number): Promise<ITournament | null> {
    return this.model.findOne({ year });
  }
}

export default TournamentService;