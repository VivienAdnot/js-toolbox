const getMin = val => {
  return Math.min(val, 10);
};

describe("getMin normal", () => {
  it("should return 10", () => {
    const val = 12;
    expect(getMin(val)).toEqual(10);
  });

  it("should return val", () => {
    const val = 6;
    expect(getMin(val)).toEqual(val);
  });
});

describe("getMin edge", () => {
  it("should return 0", () => {
    const val = null;
    expect(getMin(val)).toEqual(0);
  });

  it("should return 0", () => {
    const val = undefined;
    expect(getMin(val)).toEqual(NaN);
  });
});

describe("getMin failure", () => {
  it("should return 10", () => {
    const fn = (val1, val2, val3) => Math.min(val1, val2, val3);
    expect(fn(500, 200, 10)).toEqual(10);
  });

  it("should return 10", () => {
    const fn = (val1, val2, val3, val4, val5, val6) =>
      Math.min(val1, val2, val3, val4, val5, val6);
    expect(fn(500, 200, 100, 50, 20, 10)).toEqual(10);
  });
});
