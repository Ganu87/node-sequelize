const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

/// define here custome log format

const logFormat = printf(({level,message,timestamp}) =>{
    return `${timestamp} [${level}] ${message}`;
});

// create logger instance

const logger = winston.createLogger({
    level:'debug',
    format:combine(
        timestamp(),
        logFormat
    ),
    transports:[
        new winston.transports.Console(),
        new  winston.transports.File({filename:'logs/app.log'})   
    ]
});

// Override console methods to use winston logger
console.log = (...args) => {
    logger.info(args.join(' '));
  };
  
  console.info = (...args) => {
    logger.info(args.join(' '));
  };
  
  console.warn = (...args) => {
    logger.warn(args.join(' '));
  };
  
  console.error = (...args) => {
    logger.error(args.join(' '));
  };

module.exports =logger;