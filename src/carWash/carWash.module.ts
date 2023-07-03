import { Module } from '@nestjs/common';
import { CarWashController } from './carWash.controller';
import { CarWashService } from './carWash.service';

@Module({
  imports: [],
  controllers: [CarWashController],
  providers: [CarWashService],
  exports: [],
})
export class CarWashModule {}
