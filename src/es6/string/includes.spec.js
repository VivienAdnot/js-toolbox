describe("string", () => {
  describe("includes", () => {
    it("ok", () => {
      const str =
        "Unsupported get request. Object with ID 151076215266824 does not exist, cannot be loaded due to missing permissions.";
      expect(str.includes("Unsupported get request")).toBe(true);
    });
  });
});
