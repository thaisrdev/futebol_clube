import TeamModel from '../models/TeamModel';
import Team from '../interfaces/TeamInterface';

class TeamService {
  model = TeamModel;

  constructor() {
    this.model = TeamModel;
  }

  async getAll(): Promise<Team[]> {
    const result = await this.model.findAll();
    return result;
  }

  async getById(id: number): Promise<Team | null> {
    const result = await this.model.findByPk(id);
    return result;
  }
}

export default TeamService;
