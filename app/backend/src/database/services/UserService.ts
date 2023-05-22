import UserModel from '../models/UserModel';
import { Users } from '../interfaces/UserInterface';

class LoginService {
  model = UserModel;

  constructor() {
    this.model = UserModel;
  }

  async userLogin(email: string): Promise<UserModel | null> {
    const result = await this.model.findOne({ where: { email } });
    return result;
  }

  async userRole(email: string): Promise<Users | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}

export default LoginService;
