describe("array", () => {
  describe("includes", () => {
    const array = ["foo", "bar", "baz"];

    it("should find foo and bar", () => {
      const assertion = array.includes("foo", "bar");
      expect(assertion).toBe(true);
    });

    it("should find foo", () => {
      const assertion = array.includes("foo");
      expect(assertion).toBe(true);
    });

    it("should not find boom", () => {
      const assertion = array.includes("boom");
      expect(assertion).toBe(false);
    });
  });
});
