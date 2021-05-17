const _ = require("lodash");

describe("lodash", () => {
  describe("pick", () => {
    it("should select keys from object", () => {
      const object = {
        foo: "bar",
        bar: "baz",
        baz: "foo"
      };

      const keysSelection = ["foo", "bar"];

      const result = _.pick(object, keysSelection);

      expect(result).toEqual({
        foo: "bar",
        bar: "baz"
      });
    });
  });
});
