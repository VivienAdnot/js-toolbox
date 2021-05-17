describe("es6 Map", () => {
  describe("has", () => {
    it("basic returns true", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.delete(1)).toBe(true);
      expect(myMap.has(1)).toBe(false);
      expect(myMap.get(1)).toBeUndefined();
      expect(myMap.size).toBe(1);
    });

    it("delete undefined key throws", () => {
      const myMap = new Map([[1, "one"], [2, "two"]]);
      expect(myMap.delete("foo")).toBe(false);
      expect(myMap.size).toBe(2);
    });
  });
});
