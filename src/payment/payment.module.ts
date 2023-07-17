import { Module } from '@nestjs/common';
import { PaymentService } from './payment.ervice';

@Module({
  imports: [],
  controllers: [],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
