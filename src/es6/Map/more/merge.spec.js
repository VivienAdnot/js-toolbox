describe("es6 Map", () => {
  it("merge two maps", () => {
    const map1 = new Map([[1, "one"], [2, "two"], [3, "three"]]);
    const map2 = new Map([[1, "uno"], [2, "dos"]]);

    const merged = new Map([...map1, ...map2]);
    expect(merged.get(1)).toEqual("uno");
    expect(merged.get(2)).toEqual("dos");
    expect(merged.get(3)).toEqual("three");
  });

  it("merge maps with array", () => {
    const map1 = new Map([[1, "one"], [2, "two"], [3, "three"]]);
    const map2 = new Map([[1, "uno"], [2, "dos"]]);
    const array = [1, "eins"];

    const merged = new Map([...map1, ...map2, array]);
    expect(merged.get(1)).toEqual("eins");
    expect(merged.get(2)).toEqual("dos");
    expect(merged.get(3)).toEqual("three");
  });
});
