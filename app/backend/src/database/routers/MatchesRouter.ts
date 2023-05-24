import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import { tokenValidation, matchesValidation } from '../middlewares/validations';

const router = Router();
const matchesController = new MatchesController();

router.get('/', (req: Request, res: Response) => matchesController.getAll(req, res));

router.patch(
  '/:id',
  tokenValidation,
  (req: Request, res: Response) => matchesController.updated(req, res),
);

router.patch(
  '/:id/finish',
  tokenValidation,
  (req: Request, res: Response) => matchesController.finished(req, res),
);

router.post(
  '/',
  tokenValidation,
  matchesValidation,
  (req: Request, res: Response) => matchesController.inserted(req, res),
);

export default router;
