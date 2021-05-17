// round a float number below (1.8 => 1)

describe("floor", () => {
  it("round float to inferior", () => {
    expect(Math.floor(1.8)).toEqual(1);
  });

  it("round float to inferior", () => {
    expect(Math.floor(1.89585785747374)).toEqual(1);
  });

  it("division result is rounded inferior", () => {
    expect(Math.floor(9 / 4)).toEqual(2);
  });
});
