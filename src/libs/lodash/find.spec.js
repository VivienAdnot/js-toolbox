const _ = require("lodash");

it('find', () => {
  const drchannels = [
    {
      channel: 'google'
    },
    {
      channel: 'fb'
    }
  ];

  const hasGoogleMedia = () => {
    const google = _.find(drchannels, { channel: 'google' });
    return google;
  }

  expect(hasGoogleMedia()).toEqual({ channel: 'google' })
})