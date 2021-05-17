const Promise = require("bluebird");

it("standard usecase: multiply each values", () => {
  const multiplyArray = (arr, multiplier) => {
    return Promise.map(arr, value => {
      return Promise.resolve(value * multiplier);
    });
  };

  return multiplyArray([5, 3, 1], 100).then(result => {
    return expect(result).toEqual([500, 300, 100]);
  });
});

it("returns an array", async () => {
  const data = [1, 2, 3];

  const results = await Promise.map(data, datum => {
    const result = datum * 10;
    return Promise.resolve(result);
  });

  expect(results).toEqual([10, 20, 30]);
});
