describe('example 1', () => {
  const axios = require('axios');
  const Users = require('../__stubs__/users');

  jest.mock('axios');

  test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    axios.get.mockImplementation(() => Promise.resolve({ data: users }));

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});

describe('example 2', () => {
  const cache = require('../__stubs__/cache');
  const useCache = require('../__stubs__/useCache');

  jest.mock('../__stubs__/cache');

  // method 1
  test('should fetch users', async () => {
    cache.get.mockImplementation(() => Promise.resolve({ foo: 'bar' }));
    const result = await useCache();
    expect(result).toEqual({ foo: 'bar' });
  });
});
