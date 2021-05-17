const R = require("ramda");

describe("ramda", () => {
  describe("difference", () => {
    const foo = ["a", "b", "c"];
    const bar = ["b", "c", "d"];

    it("returns all occurences that are in foo but not in bar", () => {
      expect(R.difference(foo, bar)).toEqual(["a"]);
    });

    it("returns all occurences that are in bar but not in foo", () => {
      expect(R.difference(bar, foo)).toEqual(["d"]);
    });

    it("array order is not necessary", () => {
      const a = [1, 2, 3, 4];
      const b = [4, 3, 2, 5];

      expect(R.difference(a, b)).toEqual([1]);
      expect(R.difference(b, a)).toEqual([5]);
    });

    it("doublons are NOT represented in result", () => {
      const a = [1, 1, 1, 2, 3, 4];
      const b = [4, 3, 2, 5];

      expect(R.difference(a, b)).toEqual([1]);
      expect(R.difference(b, a)).toEqual([5]);
    });
  });

  describe("differenceWith", () => {
    const comparer = (x, y) => x.a === y.a;

    const list1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const list2 = [{ a: 3 }, { a: 4 }];

    expect(R.differenceWith(comparer, list1, list2)).toEqual([
      { a: 1 },
      { a: 2 }
    ]);

    expect(R.differenceWith(comparer, list2, list1)).toEqual([{ a: 4 }]);
  });
});
