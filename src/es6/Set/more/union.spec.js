describe("Set", () => {
  it("union", () => {
    const set1 = new Set([1, 2, 3, 4, 5]);
    const set2 = new Set([4, 5, 6, 7]);
    for (let item of set2) {
      set1.add(item);
    }

    expect([...set1]).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
