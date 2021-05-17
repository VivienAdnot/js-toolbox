const _ = require("lodash");

describe("lodash", () => {
  describe("isNull", () => {
    it("null: true", () => {
      const val = null;
      expect(_.isNull(val)).toBe(true);
    });

    it("undefined: false", () => {
      const val = undefined;
      expect(_.isNull(val)).toBe(false);
    });

    it("empty string: false", () => {
      const val = "";
      expect(_.isNull(val)).toBe(false);
    });

    it("empty object: false", () => {
      const val = {};
      expect(_.isNull(val)).toBe(false);
    });
  });
});
