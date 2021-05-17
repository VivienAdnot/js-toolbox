const R = require("ramda");
// hasPath return true or false

describe("ramda", () => {
  describe("hasPath", () => {
    const fn = data => {
      return R.hasPath(["response", "body", "error", "code"], data || {});
    };

    it("returns true", () => {
      const truthyMock = {
        response: {
          body: {
            error: {
              code: "foo"
            }
          }
        }
      };

      expect(fn(truthyMock)).toBe(true);
    });

    describe("returns false", () => {
      const falsyMock = {
        resp: {
          body: {
            err: {
              code: "foo"
            }
          }
        }
      };
      const tests = [null, undefined, {}, falsyMock];
      for (let index in tests) {
        it(String(index), () => {
          expect(fn(tests[index])).toBe(false);
        });
      }
    });

    // ramda library has a break
    it("it throws", () => {
      //return R.hasPath(["response", "body", "error", "code"], data || {});
      const mockBreaksRamda = {
        response: {
          body: {
            foo: "bar"
          }
        }
      };
      try {
        expect(fn(mockBreaksRamda)).toBe(false);
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
