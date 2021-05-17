const R = require("ramda");

// omit returns a partial copy of an object omitting the keys specified.

describe("ramda", () => {
  describe("omit", () => {
    it("removes props from object", () => {
      const data = {
        foo: "bar",
        comments: [1, 2, 3],
        sharedposts: [4, 5, 6]
      };

      expect(R.omit(["comments", "sharedposts"], data)).toEqual({ foo: "bar" });
    });
  });
});
