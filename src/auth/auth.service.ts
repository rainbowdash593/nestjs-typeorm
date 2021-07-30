import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserLocal(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email });
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserJwt(id: string): Promise<any> {
    const user = await this.usersService.findOne({ id });
    if (!user) return null;
    const { password, ...result } = user;
    return result;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email, uid: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
