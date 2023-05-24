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

  async finished(id: number): Promise<void> {
    const result = await this.model.findByPk(id);
    await result?.update({ inProgress: false });
  }

  async updated(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<void> {
    const result = await this.model.findByPk(id);
    await result?.update({
      homeTeamGoals,
      awayTeamGoals,
    });
  }

  async inserted(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<Match> {
    const result = await this.model.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return result;
  }
}

export default MatchesService;
