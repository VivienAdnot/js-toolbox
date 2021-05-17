const _ = require("lodash");

it('has', () => {
  const channel = {
    channel: {
      name: 'google'
    },
    foo: 'bar'
  };

  const test = _.has(channel, 'channel.name');
  expect(test).toBe(true);
});