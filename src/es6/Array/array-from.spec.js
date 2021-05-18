describe("Array.from", () => {
  it("basic", () => {
    const scores = Array.from({ length: 5 }).map((value, index) => {
      return index * 10;
    });

    expect(scores).toEqual([0, 10, 20, 30, 40]);
  });
});