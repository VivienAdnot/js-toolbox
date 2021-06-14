const stampit = require('@stamp/it');

const MockedStamp = stampit({
  init() {
    this.call = jest.fn();
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
