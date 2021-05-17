describe("es6 Map", () => {
  describe("get", () => {
    it("basic", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.get(1)).toBe("one");
    });

    it("undefined key returns undefined", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.get("foo")).toBeUndefined();
    });
  });
});
