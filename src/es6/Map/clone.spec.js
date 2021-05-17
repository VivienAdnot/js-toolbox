describe("es6 Map", () => {
  describe("clone", () => {
    it("different pointers", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      const clone = new Map(myMap);
      expect(clone === myMap).toBe(false);
    });

    it("basic", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      const clone = new Map(myMap);
      expect(clone.get(1)).toBe("one");

      clone.set(1, "foo");
      expect(clone.get(1)).toBe("foo");
      expect(myMap.get(1)).toBe("one");
    });
  });
});
