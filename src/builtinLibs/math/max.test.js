const getMax = val => {
  return Math.max(val, 10);
};

describe("getMax", () => {
  it("should return 10", () => {
    const val = 6;
    expect(getMax(val)).toEqual(10);
  });

  it("should return val", () => {
    const val = 12;
    expect(getMax(val)).toEqual(val);
  });
});

it("max multiple args", () => {
  expect(Math.max(1, 2, 3, 4, 4, 5, 5, 6)).toBe(6);
});
