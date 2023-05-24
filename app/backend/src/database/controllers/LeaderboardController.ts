import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  leaderboardService : LeaderboardService;

  constructor(leaderboardService = new LeaderboardService()) {
    this.leaderboardService = leaderboardService;
    this.home = this.home.bind(this);
  }

  home = async (_req: Request, res: Response) => {
    const result = await this.leaderboardService.home();
    return res.status(200).json(result);
  };

  // away = async (_req: Request, res: Response) => {
  //   const result = await this.leaderboardService.away();
  //   return res.status(200).json(result);
  // };
}

export default LeaderboardController;
