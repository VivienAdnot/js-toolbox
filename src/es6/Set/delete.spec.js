describe("Set", () => {
  describe("delete", () => {
    it("numbers", () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);

      expect(set1.delete(2)).toBe(true);
      expect(set1.delete(2)).toBe(false);
      expect(set1.delete(5)).toBe(false);

      expect(set1.has(1)).toBe(true);
      expect(set1.has(2)).toBe(false);
      expect(set1.size).toBe(1);
    });
  });
});
