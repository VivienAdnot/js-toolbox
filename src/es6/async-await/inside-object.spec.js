const _ = require('lodash');

describe('async await', () => {
  it('inside an object', async () => {
    const setBudget = async () => {
      await _.delay(() => null, 50);
      return 100;
    };

    const budget = await setBudget();
    const result = {
      foo: 'bar',
      budget,
    };

    expect(result).toEqual({
      foo: 'bar',
      budget: 100,
    });
  });
});
