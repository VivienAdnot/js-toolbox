class FacebookApiError extends Error {
  constructor(statusCode, message, shouldBeRetried = true) {
    super(`ErrorCode ${statusCode}: ${message}`);

    this.name = this.constructor.name;
    this.shouldBeRetried = shouldBeRetried;
  }
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
