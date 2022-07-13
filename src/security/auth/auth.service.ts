import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../api/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import { User } from '../../database/entities/user/user.entity';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.create(registerDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;

    const user = await this.usersService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
