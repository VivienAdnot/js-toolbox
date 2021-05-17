describe("es6 Map", () => {
  describe("has", () => {
    it("basic returns true", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.has(1)).toBe(true);
    });

    it("undefined key returns false", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.has("foo")).toBe(false);
    });
  });
});
