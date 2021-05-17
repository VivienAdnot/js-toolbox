const Promise = require('bluebird');

it('for...of loop on array', () => {
  const array = [0, 1, 2, 3, 4];
  const result = [];

  for (let value of array) {
    result.push(value * 10);
  }

  expect(result).toEqual([0, 10, 20, 30, 40]);
});

it('async for..of', async () => {
  const array = [0, 1, 2, 3, 4];
  const result = [];

  for (let value of array) {
    await Promise.delay(100);
    result.push(value * 10);
  }

  expect(result).toEqual([0, 10, 20, 30, 40]);
});
