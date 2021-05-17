const _ = require("lodash");
// https://lodash.com/docs/4.17.15#flowRight

describe("lodash", () => {
  // show this example to help understand the example with flowRight
  it("add", () => {
    expect(_.add(6, 4)).toBe(10);
  });

  it("flowRight", () => {
    const square = n => n * n;

    const addSquare = _.flowRight([square, _.add]);
    // first: _.add(1,2) = 3
    // second: square(3) = 9
    const result = addSquare(1, 2);

    expect(result).toBe(9);
  });
});
