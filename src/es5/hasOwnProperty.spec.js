describe("hasOwnProperty", () => {
  it("basic", () => {
    const obj = { a: 1, b: 2, c: 3, 1: "one" };
    expect(obj.hasOwnProperty("a")).toBe(true);

    // returns true because no type check
    expect(obj.hasOwnProperty("1")).toBe(true);
    expect(obj.hasOwnProperty(1)).toBe(true);
  });
});
