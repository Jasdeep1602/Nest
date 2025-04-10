import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/decorators';

// @UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user; // This will return the user object from the request
  }

  // @Get('cache/:key')
  // async getCachedData(@Param('key') key: string): Promise<any> {
  //   return this.userService.getCachedData(key);
  // }
  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
