const _ = require('lodash');
const axios = require('axios');
const Users = require('../__stubs__/users');

jest.mock('axios');

test('should fetch users', async () => {
  axios.get.mockRejectedValue({
    response: {
      error: {
        code: 100,
        message: 'foo',
        type: 'GraphMethodException',
      },
    },
  });

  try {
    await Users.all();
  } catch (err) {
    expect(err.response.error.code).toEqual(100);
  }
});
