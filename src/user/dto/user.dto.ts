import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}

export class UserEntity {
  @Expose()
  id: number;
  @Expose()
  username: string;
  @Expose()
  email: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  hash: string;

  @Exclude()
  refreshToken?: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
