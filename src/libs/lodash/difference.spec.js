const _ = require("lodash");

describe("lodash", () => {
  describe("difference", () => {
    const foo = ["a", "b", "c"];
    const bar = ["b", "c", "d"];

    it("returns all occurences that are in foo but not in bar", () => {
      expect(_.difference(foo, bar)).toEqual(["a"]);
    });

    it("returns all occurences that are in bar but not in foo", () => {
      expect(_.difference(bar, foo)).toEqual(["d"]);
    });

    it("array order is not necessary", () => {
      const a = [1, 2, 3, 4];
      const b = [4, 3, 2, 5];

      expect(_.difference(a, b)).toEqual([1]);
      expect(_.difference(b, a)).toEqual([5]);
    });

    describe("doublons are represented in result", () => {
      it("show all left occurences if none exist in right", () => {
        const a = [1, 1, 1, 2, 3, 4];
        const b = [4, 3, 2, 5];

        expect(_.difference(a, b)).toEqual([1, 1, 1]);
        expect(_.difference(b, a)).toEqual([5]);
      });

      it("do NOT show any left occurence if it exists in right, even if number of occurences do no match", () => {
        const a = [1, 1, 1, 2, 3, 4];
        const b = [1, 4, 3, 2, 5];

        expect(_.difference(a, b)).toEqual([]);
        expect(_.difference(b, a)).toEqual([5]);
      });
    });
  });

  describe("differenceWith", () => {
    const comparer = (x, y) => x.a === y.a;

    const list1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const list2 = [{ a: 3 }, { a: 4 }];

    expect(_.differenceWith(list1, list2, comparer)).toEqual([
      { a: 1 },
      { a: 2 }
    ]);

    expect(_.differenceWith(list2, list1, comparer)).toEqual([{ a: 4 }]);
  });
});
