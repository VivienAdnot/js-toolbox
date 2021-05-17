describe("regex", () => {
  describe("no-dash", () => {
    it("ok", () => {
      const str = "foo";
      const regex = /^[0-9a-zA-Z_]+$/;
      const isMatching = regex.test(str);

      expect(isMatching).toBe(true);
    });
  });
});
