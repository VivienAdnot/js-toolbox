describe("Set", () => {
  it("spread", () => {
    const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
    expect([...mySet]).toEqual([1, 2, 3, 4, 5]);
  });

  it("Array.from", () => {
    const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
    expect(Array.from(mySet)).toEqual([1, 2, 3, 4, 5]);
  });

  it("forEach", () => {
    let result = "";
    const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
    mySet.forEach(value => {
      result += value;
    });

    expect(result).toEqual("12345");
  });

  it("for...of", () => {
    let result = "";
    const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);

    for (let value of mySet) {
      result += value;
    }

    expect(result).toEqual("12345");
  });
});
