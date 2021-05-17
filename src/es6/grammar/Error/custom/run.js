const { FacebookApiError } = require("./customErrors");

const myFuncWillFail = async () => {
  throw new FacebookApiError(404, "foo");
};

const shouldRetry = err => {
  if (err instanceof FacebookApiError) {
    // err.name = GraphMethodException
    // err.shouldBeRetried = false
    return err.shouldBeRetried;
  }

  return true;
};

module.exports = {
  myFuncWillFail,
  shouldRetry
};
