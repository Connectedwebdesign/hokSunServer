module.exports = class AppError extends Error {
    constructor(message, status, extra) {
      // Calling parent constructor of base Error class.
      super(message);
  
      // Capturing stack trace, excluding constructor call from it.
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name;
      this.message = message;
      this.msg = message;
      this.status = status || 500;
      this.extra = extra;
    }
  };
  