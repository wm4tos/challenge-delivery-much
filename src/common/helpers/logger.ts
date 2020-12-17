import winston, { createLogger, transports, format } from 'winston';

const {
  json, combine, timestamp, colorize,
} = format;

export const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
    colorize(),
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

export const loggerData = (
  level: string, data: { type: string, filename: string, endpoint: string, statusCode: number, response: any },
): winston.Logger => logger[level](JSON.stringify(data));

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
