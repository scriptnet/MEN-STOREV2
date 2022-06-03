const { isEmpty } = require('lodash');
// eslint-disable-next-line import/no-extraneous-dependencies
const { remote } = require('electron');
const localLogger = require('./logger');
const logDna = require('./logdna');

class Log {
  constructor(context, process) {
    this.log = localLogger(context);
    this.logdna = logDna(context);
    this.logProcess = process;
  }

  // eslint-disable-next-line class-methods-use-this
  sendRemoteLogs() {
    if (process.env.REMOTE_LOGS === 'false') return false;
    if (this.logProcess === 'renderer') {
      const remoteLogContext = remote.getGlobal('logContext');
      this.logdna.addMetaProperty('logContext', remoteLogContext);
    } else {
      this.logdna.addMetaProperty('logContext', global.logContext);
    }
    return true;
  }

  info(msg, ...args) {
    let finalMsg;
    if (!isEmpty(args)) {
      try {
        finalMsg = msg.concat(' ', JSON.stringify(...args));
      } catch (error) {
        finalMsg = msg.concat(' ', 'There was an error parsing this log');
      }
      this.log.info(msg, args);
    } else {
      finalMsg = msg;
      this.log.info(msg);
    }
    if (this.sendRemoteLogs()) this.logdna.info(finalMsg);
  }

  warn(msg, ...args) {
    let finalMsg;
    if (!isEmpty(args)) {
      try {
        finalMsg = msg.concat(' ', JSON.stringify(...args));
      } catch (error) {
        finalMsg = msg.concat(' ', 'There was an error parsing this log');
      }
      this.log.warn(msg, args);
    } else {
      finalMsg = msg;
      this.log.warn(msg);
    }
    if (this.sendRemoteLogs()) this.logdna.warn(finalMsg);
  }

  debug(msg, ...args) {
    let finalMsg;
    if (!isEmpty(args)) {
      try {
        finalMsg = msg.concat(' ', JSON.stringify(...args));
      } catch (error) {
        finalMsg = msg.concat(' ', 'There was an error parsing this log');
      }
      this.log.debug(msg, args);
    } else {
      finalMsg = msg;
      this.log.debug(msg);
    }
    if (this.sendRemoteLogs()) this.logdna.debug(finalMsg);
  }

  error(msg, ...args) {
    let finalMsg;
    if (!isEmpty(args)) {
      try {
        finalMsg = msg.concat(' ', JSON.stringify(...args));
      } catch (error) {
        finalMsg = msg.concat(' ', 'There was an error parsing this log');
      }
      this.log.error(msg, args);
    } else {
      finalMsg = msg;
      this.log.error(msg);
    }
    if (this.sendRemoteLogs()) this.logdna.error(finalMsg);
  }
}

module.exports = Log;
