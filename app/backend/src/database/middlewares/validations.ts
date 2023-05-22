import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/token';

const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { email, password } } = req;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!regex.test(email) || password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { headers: { authorization } } = req;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const isValid = validateToken(authorization);
    res.locals.validToken = isValid;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
