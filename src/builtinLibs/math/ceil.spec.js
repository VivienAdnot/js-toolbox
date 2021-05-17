// round a float number above (1.3 => 2)

describe("ceil", () => {
  it("round float to superior", () => {
    expect(Math.ceil(1.3)).toEqual(2);
  });

  it("division result is rounded superior", () => {
    expect(Math.ceil(9 / 4)).toEqual(3);
  });
});
