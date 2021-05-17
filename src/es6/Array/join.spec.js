describe("array.join", () => {
  describe("join with space", () => {
    it("no separator if only one element", () => {
      const array = ["A"];
      expect(array.join(" ")).toEqual("A");
    });
  });

  it("join with comma", () => {
    expect(["a", "b", "c"].join(",")).toEqual("a,b,c");
  });
});
