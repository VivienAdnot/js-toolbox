describe("es6 Map", () => {
  describe("ctor", () => {
    it("no ctor data", () => {
      const myMap = new Map();
      expect(myMap.size).toBe(0);
    });

    it("array at starter", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.size).toBe(2);
      expect(myMap.get(1)).toBe("one");
    });

    it("mixed keys at starter", () => {
      const myMap = new Map([[1, "one"], ["foo", "bar"]]);
      expect(myMap.size).toBe(2);
      expect(myMap.get(1)).toBe("one");
      expect(myMap.get("foo")).toBe("bar");
    });

    it("NOK: you cannot use objects at starter", () => {
      const myMap = new Map([{ 1: "one" }]);
      expect(myMap.size).toBe(1);
      // value was created but you cannot access it with key 1
      expect(myMap.get(1)).toBeUndefined();
    });
  });
});
