/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 */

describe("slice", () => {
  it("slice(1)", () => {
    const fn = str => str.slice(1);
    return expect(fn("boom")).toEqual("oom");
  });

  it("slice(0, 1)", () => {
    const fn = str => str.slice(0, 1);
    return expect(fn("boom")).toEqual("b");
  });

  it("slice(-1)", () => {
    const fn = str => str.slice(0, -1);
    return expect(fn("boom")).toEqual("boo");
  });
});
