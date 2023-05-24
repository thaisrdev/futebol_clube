import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/token';
import MatchModel from '../models/MatchModel';

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

export const matchesValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { homeTeamId, awayTeamId } } = req;
  const home = await MatchModel.findByPk(homeTeamId);
  const away = await MatchModel.findByPk(awayTeamId);
  if (homeTeamId === awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  if (!home || !away) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }
  next();
};
