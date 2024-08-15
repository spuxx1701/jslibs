import { ConsoleLogger } from '@nestjs/common';

/**
 * The application log level.
 */
export const ApplicationLogLevel = {
  Default: 'default',
  Verbose: 'verbose',
} as const;
export type ApplicationLogLevel = (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];

/**
 * The custom application logger. This logger extends the NestJS console logger, but
 * simplifies the API to set the application's log levels.
 * @example
 * // main.ts
 * const app = await NestFactory.create(AppModule, {
 *   logger: new CustomLogger({ logLevel: ApplicationLogLevel.Verbose }),
 * });
 */
export class CustomLogger extends ConsoleLogger {
  constructor(options?: { logLevel?: ApplicationLogLevel; context?: string }) {
    super();
    const { logLevel, context }: { logLevel: ApplicationLogLevel; context?: string } = {
      logLevel: 'default',
      ...options,
    };
    this.setLogLevel(logLevel);
    if (context) {
      this.setContext(context);
    }
  }

  /**
   * Sets the logger's log level.
   * @param logLevel THe log level to set.
   */
  setLogLevel(logLevel: ApplicationLogLevel) {
    if (logLevel === ApplicationLogLevel.Verbose) {
      this.setLogLevels(['debug', 'verbose', 'log', 'warn', 'error', 'fatal']);
    } else {
      this.setLogLevels(['log', 'warn', 'error', 'fatal']);
    }
  }
}
