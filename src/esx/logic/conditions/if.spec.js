describe("conditions", () => {
  describe("!! function", () => {
    it("false when function is undefined", () => {
      const wrapRetry = (options = {}) => {
        const { shouldRetry } = options;
        const retryResult = !!shouldRetry;
        return retryResult;
      };

      const myFn = wrapRetry();
      expect(myFn).toBe(false);
    });

    it("true when function is defined", () => {
      const wrapRetry = (options = {}) => {
        const { shouldRetry } = options;
        const retryResult = !!shouldRetry;
        return retryResult;
      };

      const myFn = wrapRetry({ shouldRetry: () => "foo" });
      expect(myFn).toBe(true);
    });
  });
});
