const _ = require("lodash");

describe("lodash", () => {
  describe("isEmpty", () => {
    it("null", () => {
      expect(_.isEmpty(null)).toEqual(true);
    });

    it("undefined", () => {
      expect(_.isEmpty(undefined)).toEqual(true);
    });

    it("empty object", () => {
      expect(_.isEmpty({})).toEqual(true);
    });

    it("empty array", () => {
      expect(_.isEmpty([])).toEqual(true);
    });

    it("non-empty object", () => {
      expect(_.isEmpty({ foo: "bar" })).toEqual(false);
    });
  });
});
