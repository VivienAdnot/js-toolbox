// remove the falsy values of an array
const _ = require("lodash");

describe("lodash", () => {
  describe("compact", () => {
    it("remove the falsy values of an array, 0 included", () => {
      const result = _.compact([0, 1, false, 2, "", 3]);
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
