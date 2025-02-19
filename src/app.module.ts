import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from './auth/config/refresh.config';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, JwtService],
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigModule.forFeature(refreshConfig),
  ],
})
export class AppModule {}
