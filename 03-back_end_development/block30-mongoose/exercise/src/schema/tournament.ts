import { Schema } from 'mongoose';
import { ITournament } from '../interface/tournament';

const TournamentSchema = new Schema<ITournament>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: Number,
  editionStrikers: { type: [String], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalKeeper: String,
  bestYoungPlayer: String, 
});

export default TournamentSchema;