describe("array", () => {
  describe("includes standard usecases", () => {
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

  describe("includes edge usecases", () => {
    const array = ["foo", "bar", "baz"];

    it("should not find undefined", () => {
      const foo = undefined;
      const assertion = array.includes(foo);
      expect(assertion).toBe(false);
    });

  });
});
