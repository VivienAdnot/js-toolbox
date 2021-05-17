// puissance.
// Math.pow(4, 0.5) = 2

describe("pow", () => {
  it("0^2", () => {
    expect(Math.pow(0, 2)).toBe(0);
  });

  it("1^2", () => {
    expect(Math.pow(1, 2)).toBe(1);
  });

  it("2^2", () => {
    expect(Math.pow(2, 2)).toBe(4);
  });

  it("2^0", () => {
    expect(Math.pow(2, 0)).toBe(1);
  });

  it("4^2", () => {
    expect(Math.pow(2, 4)).toBe(16);
  });

  it("-2^2", () => {
    expect(Math.pow(2, -2)).toBe(0.25);
  });
});
