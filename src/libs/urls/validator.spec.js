const validator = require("validator");

describe("validator", () => {
  describe("isURL", () => {
    describe("should be true", () => {
      const tests = ["http://foo.com", "www.foo.com", "facebook.com?foo=1"];

      for (let test of tests) {
        it(test, () => {
          expect(validator.isURL(test)).toBe(true);
        });
      }
    });

    describe("should be true", () => {
      const tests = ["://foo.com"];

      for (let test of tests) {
        it(test, () => {
          expect(validator.isURL(test)).toBe(false);
        });
      }
    });
  });
});
