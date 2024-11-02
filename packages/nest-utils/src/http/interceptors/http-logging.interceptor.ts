import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * `HttpLoggingInterceptor` logs incoming HTTP requests.
 * @example
 * import { Controller, UseInterceptors } from '@nestjs/common';
 * import { HttpLoggingInterceptor } from '@src/http/logging/logging.interceptor';
 * // Apply globally...
 * app.useGlobalInterceptors(new HttpLoggingInterceptor());
 *
 * // ...or to a controller...
 * ＠Controller()
 * ＠UseInterceptors(HttpLoggingInterceptor)
 * export class MyController {}
 *
 * // ...or to a single entrypoint
 * export class MyController {
 *   ＠Get('cats')
 *   ＠UseInterceptors(HttpLoggingInterceptor)
 *   getCats() {}
 * }
 */
@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<object> {
    const request = context.getArgByIndex(0);
    const dateIn = new Date();
    Logger.verbose(
      `Incoming request: ` + `${String(request.method).toUpperCase()} ${request.url}.`,
    );
    return next.handle().pipe(
      tap(() => {
        const dateOut = new Date();
        Logger.verbose(`Request fulfilled after ${dateOut.getTime() - dateIn.getTime()}ms.`);
      }),
    );
  }
}
