export interface ITournament {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals?: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalKeeper?: string,
  bestYoungPlayer?: string, 
};