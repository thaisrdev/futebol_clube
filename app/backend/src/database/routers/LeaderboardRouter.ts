import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get('/home', (req: Request, res: Response) => leaderboardController.home(req, res));

export default router;
