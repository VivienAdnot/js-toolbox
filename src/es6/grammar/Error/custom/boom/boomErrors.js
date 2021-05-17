class FacebookApiError extends Error {
  constructor(statusCode, message) {
    //constructor(message, options = {}) {
    // const { statusCode = 500, data = null, shouldBeRetried = true } = options;

    super(`ErrorCode ${statusCode}: ${message}`);

    // const error = new Error(message || undefined);
    // Error.captureStackTrace(error, ctor);
    // error.data = data;
    // internals.initialize(error, statusCode);
    // error.typeof = ctor;

    this.name = this.constructor.name;
    // this.data = { statusCode, message };
    // this.shouldBeRetried = shouldBeRetried;
  }

  // static GraphMethodException(message, data) {
  //   return new FacebookApiError(message, { errorCode: 100, data });
  // }
}

class GraphMethodException extends FacebookApiError {
  constructor(message) {
    super(100, message, false);
  }
}

module.exports = {
  FacebookApiError,
  GraphMethodException
};
