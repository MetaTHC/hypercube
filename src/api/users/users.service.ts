import { Injectable } from '@nestjs/common';
import { UserDto } from '../../database/dto/user.dto';
import { User } from '../../database/entities/user/user.entity';

@Injectable()
export class UsersService {
  async create(userDto: UserDto) {
    const user = User.create(userDto);
    await user.save();
    delete user.password;
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);
    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await User.findOne(id);
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: { email: email },
    });
  }
}
