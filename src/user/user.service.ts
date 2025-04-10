// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Cache } from 'cache-manager';
import {
  // Inject,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    // @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prisma: PrismaService,
  ) {}

  async getAllUsers() {
    // const cachedData = await this.cacheManager.get('users'); // Check if data is cached
    // if (cachedData) {
    //   console.log('Cache hit!'); // Log if cache is hit
    //   return cachedData; // Return cached data if available
    // } // this logic can be auto handled by cache interceptor in nestjs
    console.log('Cache miss!'); // Log if cache is missed
    const users = await this.prisma.user.findMany(); // Fetch data from database
    // await this.cacheManager.set('users', users); // this logic can be auto handled by cache interceptor
    return users; // Return fetched data
  }
}
