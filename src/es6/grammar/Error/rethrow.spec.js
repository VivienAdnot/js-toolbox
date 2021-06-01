const _ = require('lodash');
const axios = require('axios');

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
    await axios.get('http://example.com')
  } catch (err) {
    expect(err.response.error.code).toEqual(100);
  }
});

test('rethrow', async () => {
  axios.get.mockRejectedValue({
    response: {
      error: {
        code: 100,
        message: 'foo',
        type: 'GraphMethodException',
      },
      status: 400
    },
  });

  const fn = async () => {
    try {
      await axios.get('http://example.com');
    } catch (err) {
      const { response } = err;
      throw response
    }
  };

  try {
    await fn();
  } catch (err) {
    const { error, status } = err;
    expect(error.code).toEqual(100);
    expect(status).toEqual(400);
  }
});
