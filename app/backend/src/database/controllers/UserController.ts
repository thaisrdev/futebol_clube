import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import UserService from '../services/UserService';
import generateToken from '../utils/token';

class userController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.userLogin = this.userLogin.bind(this);
    this.userRole = this.userRole.bind(this);
  }

  userLogin = async (req: Request, res: Response) => {
    const { body: { email, password } } = req;
    const userValidation = await this.userService.userLogin(email);
    if (!userValidation) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const passwordValidation = bcrypt.compareSync(password, userValidation.password);
    if (!passwordValidation) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(email);
    return res.status(200).json({ token });
  };

  userRole = async (req: Request, res: Response) => {
    const { email } = res.locals.validToken;
    const user = await this.userService.userRole(email);
    if (!user) return res.status(401).json({ message: 'Invalid email' });
    const { role } = user;
    return res.status(200).json({ role });
  };
}

export default userController;
