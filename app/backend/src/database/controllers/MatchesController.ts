import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  matchesService: MatchesService;

  constructor(matchesService = new MatchesService()) {
    this.matchesService = matchesService;
    this.getAll = this.getAll.bind(this);
    this.finished = this.finished.bind(this);
    this.updated = this.updated.bind(this);
    this.inserted = this.inserted.bind(this);
  }

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const result = await this.matchesService.getAll(inProgress);
    return res.status(200).json(result);
  };

  finished = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    await this.matchesService.finished(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };

  updated = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    const { body: { homeTeamGoals, awayTeamGoals } } = req;
    await this.matchesService.updated(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Match updated' });
  };

  inserted = async (req: Request, res: Response) => {
    const {
      body: {
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
      },
    } = req;
    const result = await this.matchesService.inserted(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(201).json(result);
  };
}

export default MatchesController;
