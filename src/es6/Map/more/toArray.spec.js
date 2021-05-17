describe("how to convert a map to an array", () => {
  describe("spread", () => {
    it("...", () => {
      const ctor = [[1, "one"], [2, "two"]];
      const myMap = new Map(ctor);
      const array = [...myMap];
      expect(array).toEqual(ctor);
    });

    describe("order by key", () => {
      const ctor = [[2, "two"], [3, "three"], [1, "one"]];
      const myMap = new Map(ctor);

      let unorderedResult, sortedResult, valuesOnly;

      it("unordered by default", () => {
        unorderedResult = [...myMap];
        expect(unorderedResult).toEqual(ctor);
      });

      it("sort by keys", () => {
        const keys = [];
        sortedResult = [...myMap].sort(([keyB], [keyA]) => {
          keys.push([keyB, keyA]);

          if (keyB < keyA) return -1;
          else if (keyB > keyA) return 1;
          else return 0;
        });
        expect(sortedResult).toEqual([[1, "one"], [2, "two"], [3, "three"]]);
        expect(keys).toEqual([[3, 2], [1, 3], [1, 3], [1, 2]]);
      });

      it("select only values", () => {
        valuesOnly = sortedResult.map(([, val]) => val);
        expect(valuesOnly).toEqual(["one", "two", "three"]);
      });
    });
  });

  describe("Array.from", () => {
    it("basic usage", () => {
      const ctor = [[1, "one"], [2, "two"]];
      const myMap = new Map(ctor);
      const array = Array.from(myMap);
      expect(array).toEqual(ctor);
    });

    it("only keys", () => {
      const ctor = [[1, "one"], [2, "two"]];
      const myMap = new Map(ctor);
      const keys = Array.from(myMap.keys());
      expect(keys).toEqual([1, 2]);
    });
  });
});
