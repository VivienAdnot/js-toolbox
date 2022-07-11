const { helper1, helper2 } = require('./source');

it('helper1', () => {
  const result = helper1();
  expect(result).toEqual(10);
})

it('helper2', () => {
  const result = helper2();
  expect(result).toEqual(20);
})