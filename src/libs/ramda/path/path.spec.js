const R = require("ramda");

describe("ramda", () => {
  describe("path", () => {
    it("basic test", () => {
      const entity = {
        shares: {
          count: 50
        }
      };
      expect(R.path(["shares", "count"], entity)).toEqual(50);
    });

    it("path does not match data", () => {
      const entity = {
        shares: {
          count: 50
        }
      };
      expect(R.path(["shares", "countXXX"], entity)).toBeUndefined();
    });
  });
});
