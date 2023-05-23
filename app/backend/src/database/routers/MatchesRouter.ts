import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', (req: Request, res: Response) => matchesController.getAll(req, res));

export default router;
