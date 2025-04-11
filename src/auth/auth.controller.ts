import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto, RefreshDto, TokensDto } from './dto';

@Controller('auth')
// @Controller('auth') // This is the base route for this controller
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  async signup(@Body() dto: SignupDto): Promise<TokensDto> {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: SigninDto): Promise<TokensDto> {
    return this.authService.signin(dto);
  }

  // New endpoint for refreshing tokens

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refreshTokens(@Body() dto: RefreshDto): Promise<TokensDto> {
    return this.authService.refreshTokens(dto.userId, dto.refreshToken);
  }
}
