const Promise = require('bluebird');

describe('standard usage', () => {
  const multiplier = (arr) => {
    return Promise.mapSeries(arr, (value) => {
      const result = value * 100;
      return Promise.delay(result).then(() => result);
    });
  };

  const sumArray = (array) => {
    return array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  };

  it('map index', () => {
    return multiplier([5, 3, 1]).then((result) => {
      return expect(result).toEqual([500, 300, 100]);
    });
  });

  it('sum array', () => {
    return multiplier([5, 3, 1])
      .then(sumArray)
      .then((result) => {
        return expect(result).toEqual(900);
      });
  });
});

describe('real use case', () => {
  it('ensure that next calls are not performed when an error is fired', async () => {
    const logs = [];
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    try {
      await Promise.mapSeries(array, async (value) => {
        if (value === 3) {
          throw new Error(`boom:${value}`);
        }

        const id = value * 100;
        await Promise.delay(id);
        logs.push(id);
      });
    } catch (err) {
      expect(err.message).toBe('boom:3');
      expect(logs).toEqual([0, 100, 200]);
    }
  });
});
