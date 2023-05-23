import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import { Match } from '../interfaces/MatchesInterface';

class MatchesService {
  model = MatchModel;

  constructor() {
    this.model = MatchModel;
  }

  async getAll(inProgress: unknown): Promise<Match[]> {
    const result = await this.model.findAll({
      include: [{
        model: TeamModel,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, {
        model: TeamModel,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    if (inProgress === 'true') {
      return result.filter((e) => e.inProgress === true);
    }
    if (inProgress === 'false') {
      return result.filter((e) => e.inProgress === false);
    }
    return result;
  }
}

export default MatchesService;
