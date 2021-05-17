const _ = require("lodash");

describe("regex", () => {
  describe("errorCode", () => {
    const _extractErrorCode = errorMessage => {
      // matches 3 last digit, whom the first digit must start with 4 or 5/
      // example: Request failed with status code 500
      const httpErrorStatusRegex = /^.*[^\d]([4|5]{1}[0-9]{2})$/;

      const matches = String(errorMessage).match(httpErrorStatusRegex);
      if (_.size(matches) >= 2) {
        const code = matches[1];
        return Number(code);
      }

      return null;
    };

    const tests = [
      {
        errorMessage: "Request failed with status code 400",
        expected: 400
      },
      {
        errorMessage: "Request failed with status code 404",
        expected: 404
      },
      {
        errorMessage: "Request failed with status code 499",
        expected: 499
      },
      {
        errorMessage: "Request failed with status code 599",
        expected: 599
      }
    ];

    describe("should be ok", () => {
      for (let { errorMessage, expected } of tests) {
        it(errorMessage, () => {
          expect(_extractErrorCode(errorMessage)).toBe(expected);
        });
      }
    });

    describe("should not be ok", () => {
      const normalUseCases = [
        "Request failed with status code foo",
        "Request failed with status code 300",
        "Request failed with status code 600"
      ];

      for (let test of normalUseCases) {
        it(test, () => {
          expect(_extractErrorCode(test)).toBe(null);
        });
      }

      const edgeUseCases = [null, undefined, {}, []];

      for (let test of edgeUseCases) {
        it(String(test), () => {
          expect(_extractErrorCode(test)).toBe(null);
        });
      }
    });
  });
});
