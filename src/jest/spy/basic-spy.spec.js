const cache = require('../__stubs__/cache');

let spy;
describe('spy basic test', () => {
  beforeAll(() => {
    spy = jest.spyOn(cache, 'get');
  });

  const getset = async (key, value) => {
    await cache.set(key, value);
    return cache.get(key);
  };

  it('spy', async () => {
    const result = await getset('foo', 'bar');
    expect(spy).toHaveBeenCalledWith('foo');
    expect(result).toEqual('bar');
  });

  afterEach(() => {
    cache.__clearData;
  });
});
