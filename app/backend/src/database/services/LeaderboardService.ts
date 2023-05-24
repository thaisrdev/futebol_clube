import sequelize from '../models';
import { Leaderboard } from '../interfaces/LeaderboardInterface';
import query from '../utils/leadboard';

class LeaderboardService {
  model = sequelize;

  constructor() {
    this.model = sequelize;
  }

  async home(): Promise<Leaderboard[]> {
    const [result] = await this.model.query(query);
    return result as Leaderboard[];
  }
}

export default LeaderboardService;
