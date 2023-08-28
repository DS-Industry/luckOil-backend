import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AllExceptionFilter } from './common/filter/all-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('app');
  app.useGlobalFilters(new AllExceptionFilter());
  app.use(compression());
  app.enableCors();
  app.use(helmet());
  await app.listen(process.env.PORT, () => {
    logger.log(`LuckOil back-end listening on port ${process.env.PORT}`);
  });
}
bootstrap();
