// mapValues applys a tranformation function on a groupedBy object
// it modifies the output of values, but it keeps the referencing key
const _ = require("lodash");

describe("lodash", () => {
  describe("mapValues", () => {
    const users = {
      fred: { id: 1, age: 20 },
      vivien: { id: 2, age: 40 }
    };

    it("way 1, more explicit", () => {
      const result = _.mapValues(users, o => o.age);
      expect(result).toEqual({ fred: 20, vivien: 40 });
    });
    it("way 2, shorter", () => {
      const result = _.mapValues(users, "age");
      expect(result).toEqual({ fred: 20, vivien: 40 });
    });
  });
});
