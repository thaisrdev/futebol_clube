import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  matchesService: MatchesService;

  constructor(matchesService = new MatchesService()) {
    this.matchesService = matchesService;
    this.getAll = this.getAll.bind(this);
  }

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const result = await this.matchesService.getAll(inProgress);
    return res.status(200).json(result);
  };
}

export default MatchesController;
