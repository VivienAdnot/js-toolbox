jest.mock('../__stubs__/cache', () => {
  return {
    get: jest.fn((key) => key === 'foo'),
  };
});
const cache = require('../__stubs__/cache');

it('manual mock implementation', () => {
  expect(cache.get.mock).toBeTruthy();
  expect(cache.get('foo')).toBeTruthy();
  expect(cache.get('rest')).toBeFalsy();
});
