import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getAllUsers() {
    await this.cacheManager.set('key1', { message: 'Hello, Redis!' }, 300); // Cache for 5 minutes
    return this.cacheManager.get('key1'); // Retrieve cached data by key
  }
}
