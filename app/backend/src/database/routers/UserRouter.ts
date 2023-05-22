import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import { loginValidation, tokenValidation } from '../middlewares/validations';

const router = Router();
const userController = new UserController();

router.post('/', loginValidation, userController.userLogin);
router.get('/role', tokenValidation, (req: Request, res: Response) =>
  userController.userRole(req, res));

export default router;
