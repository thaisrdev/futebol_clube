import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  teamService: TeamService;

  constructor(teamService = new TeamService()) {
    this.teamService = teamService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  getAll = async (_req: Request, res: Response) => {
    const result = await this.teamService.getAll();
    return res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    const result = await this.teamService.getById(Number(id));
    return res.status(200).json(result);
  };
}

export default TeamController;
