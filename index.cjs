
class RestifyError extends Error {
  constructor(statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class BadRequestError extends RestifyError {
  constructor(message) {
    super(400, message);
  }
}

class NotFoundError extends RestifyError {
  constructor(message) {
    super(404, message);
  }
}

class InternalServerError extends RestifyError {
  constructor(message) {
    super(500, message);
  }
}

const RestifyErrorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  if (!(err instanceof RestifyError)) {
    statusCode = 500;
    message = "Internal Server Error";
  }

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = {
  RestifyError,
  BadRequestError,
  NotFoundError,
  InternalServerError,
  RestifyErrorHandler,
};
