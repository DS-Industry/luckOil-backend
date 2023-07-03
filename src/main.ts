import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('app');
  await app.listen(process.env.PORT, () => {
    logger.log(`LuckOil back-end listening on port ${process.env.PORT}`);
  });
}
bootstrap();
