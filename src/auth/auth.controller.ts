import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { Response } from 'express';
import { AuthRequest } from './types/auth-request';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user.id, req.user.name, req.user.role);
  }

  @Roles('ADMIN', 'EDITOR')
  @Get('protected')
  getAll(@Request() req: AuthRequest) {
    return {
      messege: `Now you access this protected API. This is your user ID: ${req.user.id}`,
    };
  }

  @Public()
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req: AuthRequest) {
    return this.authService.refreshToken(req.user.id, req.user.name);
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallBack(@Request() req: AuthRequest, @Res() res: Response) {
    const response = await this.authService.login(
      req.user.id,
      req.user.name,
      req.user.role,
    );
    res.redirect(
      // `http://localhost:3000/api/auth/google/callback?userId=${response.id}&name=${response.name}&accessToken=${response.accessToken}&refreshToken=${response.refreshToken}&role=${response.role}`,
      `https://fullstack-auth-nest-nextjs-1.onrender.com/api/auth/google/callback?userId=${response.id}&name=${response.name}&accessToken=${response.accessToken}&refreshToken=${response.refreshToken}&role=${response.role}`,
    );
  }

  @Post('signout')
  signOut(@Req() req: AuthRequest) {
    return this.authService.signOut(req.user.id);
  }
}
