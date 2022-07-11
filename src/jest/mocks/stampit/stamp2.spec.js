const stampit = require('@stamp/it');;
const axios = require('axios');

const MockedStamp = stampit({
  init() {
    this.call = jest.fn();
  },
  methods: {
    async call() {
      return axios.get('/users.json').then((res) => res.data);
    },
  },
});

it('test', async () => {
  const myMockedStamp = MockedStamp();
  myMockedStamp.call.mockRejectedValue({
    response: {
      error: {
        code: 100,
        message: 'foo',
        type: 'GraphMethodException',
      },
    },
  });

  try {
    await myMockedStamp.call();
  } catch (err) {
    expect(err.response.error.code).toEqual(100);
  }
});
