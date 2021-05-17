const randomInt = (start, end) =>
  Math.floor(Math.random() * (end - start + 1) + start);

const randomBool = () => {
  return;
};

describe("randomInt", () => {
  it("1, 0", () => {
    expect(randomInt(1, 0)).toBe(1);
  });

  it("1, 1", () => {
    expect(randomInt(1, 1)).toBe(1);
  });
});
