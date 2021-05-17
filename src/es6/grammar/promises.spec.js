describe("ES6 promises", () => {
  describe("chaining", () => {
    it("normal behavior: result is true", () => {
      const fn = () => Promise.resolve().then(() => true);

      return fn().then(result => {
        return expect(result).toBe(true);
      });
    });

    it("trap: result is undefined instead of true", () => {
      const fn = () => Promise.resolve().then(true);

      return fn().then(result => {
        return expect(result).toBeUndefined();
      });
    });
  });
});
