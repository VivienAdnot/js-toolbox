const Promise = require("bluebird");

//it loop
describe("for-loop sync", () => {
  const tests = [1, 2, 3];

  for (value of tests) {
    it(`value ${value} toBeTruthy`, () => {
      return expect(value).toBeTruthy();
    });
  }
});

describe("for-loop async", () => {
  const tests = [1, 2, 3];

  const isPair = async value => {
    return Promise.resolve(true);
  };

  tests.forEach(test => {
    it(`value ${test} toBeTruthy`, async () => {
      return isPair(test).then(result => {
        expect(result).toBeTruthy();
      });
    });
  });
});
