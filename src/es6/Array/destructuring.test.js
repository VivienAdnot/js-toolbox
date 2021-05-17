it("1", () => {
  let array = [1, 2, 3];
  const [val1, val2] = array;
  expect(val1).toEqual(1);
  expect(val2).toEqual(2);
});

describe("with defaults", () => {
  it("1", () => {
    let array = [1, 2, 3];
    const [val1 = 10] = array;
    expect(val1).toEqual(1);
  });

  it("2", () => {
    let array = [];
    const [val1 = 10] = array;
    expect(val1).toEqual(10);
  });
});
