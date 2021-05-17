describe("cast to boolan", () => {
  it("should be true", () => {
    expect(Boolean("true")).toBe(true);
  });

  it("WARNING: this returns true instead of false !!!", () => {
    expect(Boolean("false")).toBe(true);
  });
});
