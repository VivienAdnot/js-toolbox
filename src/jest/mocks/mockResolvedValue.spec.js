const axios = require('axios');
const Users = require('../__stubs__/users');

jest.mock('axios');

test('should fetch users', async () => {
  const users = [{ name: 'Bob' }];

  axios.get.mockResolvedValue({ data: users });

  const res = await Users.all();
  expect(res).toEqual(users);
});
