/* eslint-disable no-console */
import { ServiceMixin } from '../mixin/service-mixin';

/**
 * Represents the log level of a message. The log level determines the severity of the message
 * and also controls the output channel (e.g. stdout, stderr).
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Represents a log message that can be logged to the console and persisted.
 */
export interface LogMessage {
  /**
   * The message text.
   */
  text: string;
  /**
   * The {@link LogLevel} of the message.
   */
  level: LogLevel;
  /**
   * The date and time when the message was created.
   */
  date: Date;
  /**
   * The context of the message (e.g. the caller).
   */
  context?: string;
}

/**
 * Represents a logger service that provides logging functionality. Messages will be logged
 * to console and also persisted for the duration of the service's lifetime.
 *
 * @example
 * // Set the log level while bootstrapping your application
 * Logger.level = 'debug';
 *
 * // Logging inside a function
 * Logger.debug("Hello World!", "MyFunction");
 *
 * // Logging inside a class
 * Logger.info("Hello World!", this.constructor.name);
 *
 * // Logging without a context
 * Logger.warn("Hello World!");
 *
 * // You may also directly import the logging functions
 * import { error } from '@spuxx/js-utils';
 * error("Hello World!");
 *
 * // Access the stored messages
 * Logger.messages.forEach(message => console.log(JSON.stringify(message)));
 */
export class Logger extends ServiceMixin<Logger>() {
  private _level: LogLevel = 'warn';
  private _messages: LogMessage[] = [];

  /**
   * Returns the `Logger`s log level.
   * @returns The log level.
   * @example
   * Logger.setLevel('debug');
   * console.log(Logger.level); // Output: debug
   */
  static get level(): LogLevel {
    return this.instance._level;
  }

  /**
   * Sets the `Logger`s log level.
   * @param level - The log level to set.
   * @example
   * Logger.setLevel('debug');
   * console.log(Logger.level); // Output: debug
   */
  static setLevel(level: LogLevel): void {
    this.instance._level = level;
  }

  /**
   * Returns all stored log messages.
   * @returns The list of stored log messages.
   * @example
   * console.log(Logger.messages.length); // Output: 0
   * Logger.debug("Hello World!");
   * console.log(Logger.messages.length); // Output: 1
   */
  static get messages() {
    return [...this.instance._messages];
  }

  /**
   * Logs a `debug` message.
   * @param message - The message to log.
   * @param context - The context of the message (e.g. the caller).
   * @example
   * Logger.debug("Hello World!", "MyFunction");
   */
  static debug(message: string, context?: string): void {
    const msg = this.instance.createAndPushMessage(message, 'debug', context);
    if (this.level !== 'debug') return;
    console.debug(this.instance.createMessageString(msg));
  }

  /**
   * Logs an `info` message.
   * @param message - The message to log.
   * @param context - The context of the message (e.g. the caller).
   * @example
   * Logger.info("Hello World!", "MyFunction);
   */
  static info(message: string, context?: string): void {
    const msg = this.instance.createAndPushMessage(message, 'info', context);
    if (this.level === 'warn' || this.level === 'error') return;
    console.info(this.instance.createMessageString(msg));
  }

  /**
   * Logs a `warn` message.
   * @param message - The message to log.
   * @param context - The context of the message (e.g. the caller).
   * @example
   * Logger.warn("Hello World!", "MyFunction");
   */
  static warn(message: string, context?: string): void {
    const msg = this.instance.createAndPushMessage(message, 'warn', context);
    if (this.level === 'error') return;
    console.warn(this.instance.createMessageString(msg));
  }

  /**
   * Logs an `error` message.
   * @param message - The message to log.
   * @param context - The context of the message (e.g. the caller).
   * @example
   * Logger.error("Hello World!", "MyFunction");
   */
  static error(message: string, context?: string): void {
    const msg = this.instance.createAndPushMessage(message, 'error', context);
    console.error(this.instance.createMessageString(msg));
  }

  private createMessageString(message: LogMessage): string {
    return `${message.context ? `[${message.context}]  ` : ''}[${message.date.toISOString()}]  [${message.level}]  ${
      message.text
    }`;
  }

  private createAndPushMessage(text: string, level: LogLevel, context?: string): LogMessage {
    const fullMessage: LogMessage = {
      text,
      level,
      date: new Date(),
      context,
    };
    this._messages.push(fullMessage);
    return fullMessage;
  }
}

/**
 * Logs a `debug` message.
 * @param message - The message to log.
 * @param context - The context of the message (e.g. the caller).
 * @example
 * debug("Hello World!", "MyFunction");
 */
const debug = Logger.debug.bind(Logger);
/**
 * Logs an `info` message.
 * @param message - The message to log.
 * @param context - The context of the message (e.g. the caller).
 * @example
 * info("Hello World!", "MyFunction);
 */
const info = Logger.info.bind(Logger);
/**
 * Logs a `warn` message.
 * @param message - The message to log.
 * @param context - The context of the message (e.g. the caller).
 * @example
 * warn("Hello World!", "MyFunction");
 */
const warn = Logger.warn.bind(Logger);
/**
 * Logs an `error` message.
 * @param message - The message to log.
 * @param context - The context of the message (e.g. the caller).
 * @example
 * error("Hello World!", "MyFunction");
 */
const error = Logger.error.bind(Logger);
export { debug, info, warn, error };
