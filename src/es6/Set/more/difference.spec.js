// it has to be transformed to array to perform filter

describe("Set", () => {
  it("set1 minus set2", () => {
    const set1 = new Set([1, 2, 3, 4, 5]);
    const set2 = new Set([4, 5, 6, 7]);
    const difference = new Set([...set1].filter(x => !set2.has(x)));

    expect([...difference]).toEqual([1, 2, 3]);
  });
});
