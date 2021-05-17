// it has to be transformed to array to perform filter

describe("Set", () => {
  it("intersection between two sets", () => {
    const set1 = new Set([1, 2, 3, 4, 5]);
    const set2 = new Set([4, 5, 6, 7]);
    const intersection = new Set([...set1].filter(x => set2.has(x)));

    expect([...intersection]).toEqual([4, 5]);
  });
});
