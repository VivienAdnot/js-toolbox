const R = require("ramda");
// returns expected value or Default

describe("ramda", () => {
  describe("pathOr", () => {
    const fn = data => {
      return R.pathOr(10, ["error", "error", "code"], data);
    };

    it("returns expected value", () => {
      expect(
        fn({
          error: {
            error: {
              code: 100
            }
          }
        })
      ).toEqual(100);
    });

    describe("returns default value", () => {
      const partialMock1 = { error: undefined };

      const partialMock2 = {
        error: {
          error: undefined
        }
      };

      const tests = [null, undefined, {}, partialMock1, partialMock2];
      for (let index in tests) {
        it(String(index), () => {
          expect(fn(tests[index])).toEqual(10);
        });
      }
    });
  });
});
