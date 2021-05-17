describe("es6 Map", () => {
  describe("iterating map", () => {
    describe("with for...of", () => {
      it("for...of", () => {
        const myMap = new Map([[1, "one"], [2, "two"]]);
        let result = {};
        for (let [key, value] of myMap) {
          result[key] = value;
        }
        expect(result).toEqual({
          1: "one",
          2: "two"
        });
      });

      it("over keys", () => {
        const myMap = new Map([[1, "one"], [2, "two"]]);
        let result = [];
        for (let key of myMap.keys()) {
          result.push(key);
        }
        expect(result).toEqual([1, 2]);
      });

      it("over values", () => {
        const myMap = new Map([[1, "one"], [2, "two"]]);
        let result = [];
        for (let value of myMap.values()) {
          result.push(value);
        }
        expect(result).toEqual(["one", "two"]);
      });

      it("over entries (key,value)", () => {
        const myMap = new Map([[1, "one"], [2, "two"]]);
        let result = {};
        for (let [key, value] of myMap.entries()) {
          result[key] = value;
        }
        expect(result).toEqual({
          1: "one",
          2: "two"
        });
      });
    });

    describe("with forEach", () => {
      it("", () => {
        const myMap = new Map([[1, "one"], [2, "two"]]);
        let result = {};
        myMap.forEach((value, key) => {
          result[key] = value;
        });

        expect(result).toEqual({
          1: "one",
          2: "two"
        });
      });
    });
  });
});
