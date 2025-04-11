import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/decorators';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from './dto/user.dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return plainToInstance(UserEntity, user, {
      excludeExtraneousValues: true,
    }); // This will return the user object from the request
  }

  @UseInterceptors(CacheInterceptor) // Use the CacheInterceptor to cache the response(this can only be used on get requests)
  @Get('all')
  async getAll() {
    return this.userService.getAllUsers();
  }
}
