import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status;
    let message;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    } else if (exception instanceof QueryFailedError) {
      status = HttpStatus.UNPROCESSABLE_ENTITY;
      message = 'Unable to process request';
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal Server Error';
    }

    const res: any = this.getErrorResponse(status, request, message);

    response.status(status).json(res);
  }

  private getErrorResponse = (
    status: HttpStatus,
    request: Request,
    error: any,
  ): any => {
    return {
      statusCode: status,
      error: error,
      path: request.url,
      method: request.method,
      timeStamp: new Date().toISOString(),
    };
  };
}
