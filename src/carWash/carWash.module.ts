import { Module } from '@nestjs/common';
import { CarWashController } from './carWash.controller';
import { CarWashService } from './carWash.service';
import { CarWashRepository } from './carWash.repository';

@Module({
  imports: [],
  controllers: [CarWashController],
  providers: [CarWashService, CarWashRepository],
  exports: [],
})
export class CarWashModule {}
