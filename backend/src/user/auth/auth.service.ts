import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './token-payload.interface';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async createToken(user: { username: string; password: string }) {
    const dbUser = await this.userService.getByCredentials(
      user.username,
      user.password
    );
    if (dbUser) {
      const payload: JwtPayload = { username: user.username };
      return this.jwtService.sign(payload, { expiresIn: 3600 });
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const dbUser = await this.userService.getByName(payload.username);
    return dbUser;
  }
}
