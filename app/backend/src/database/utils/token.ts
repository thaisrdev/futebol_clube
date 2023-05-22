import { Secret, sign, SignOptions, verify } from 'jsonwebtoken';

const secretKey: Secret = process.env.JWT_SECRET as string;

const generateToken = (email: string): string => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const result = sign({ email }, secretKey, jwtConfig);
  return result;
};

export const validateToken = (token: string) => {
  const result = verify(token, secretKey);
  return result;
};

export default generateToken;
