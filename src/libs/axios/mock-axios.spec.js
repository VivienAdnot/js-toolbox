const _ = require("lodash");
const axios = require("axios");

jest.mock('axios');

const payload = {
  access_token: "****",
  expires_in: 3599,
  scope: "https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile",
  token_type: "Bearer",
  id_token: "****",
};

describe('mock axios post', () => {
  beforeEach(() => {
    axios.post.mockImplementation(() =>
      Promise.resolve({ data: payload })
    );
  })

  afterEach(() => {
    axios.post.mockClear();
  })

  it('test', async () => {
    const response = await axios.post('/path');
    expect(response.data).toEqual(payload)
  });
})

