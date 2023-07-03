import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EnvironmentModule } from 'src/environment/environment.module';
import { JwtTokenModule } from 'src/frameworks/jwt/jwt-token.module';
import { BcryptModule } from 'src/frameworks/bcrypt/bcrypt.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [EnvironmentModule, JwtTokenModule, BcryptModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
