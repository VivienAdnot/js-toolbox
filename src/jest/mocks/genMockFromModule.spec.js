const cache = jest.genMockFromModule('../__stubs__/cache');
cache.get = jest.fn((key) => key === 'foo');

it('jest.genMockFromModule', () => {
  expect(cache.get.mock).toBeTruthy();
  expect(cache.get._isMockFunction).toBeTruthy();
  expect(cache.get('foo')).toBeTruthy();
  expect(cache.get('rest')).toBeFalsy();
});
