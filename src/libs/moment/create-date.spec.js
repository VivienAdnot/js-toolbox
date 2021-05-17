const moment = require('moment');

describe('create date', () => {
  it('standard', () => {
    const year = 2021;
    const month = 11 - 1; // 0 to 11
    const day = 1; // 1 to 31
    const hour = 15; // 0 to 23
    const minute = 30; // 0 to 59
    const seconds = 0; // 0 to 59

    const date = moment(new Date(year, month, day, hour, minute, seconds)).startOf('day');
    expect(date.format()).toMatchInlineSnapshot(`"2021-11-01T00:00:00+01:00"`);
  });

  it('utc', () => {
    const year = 2021;
    const month = 11 - 1; // 0 to 11
    const day = 1; // 1 to 31
    const hour = 15; // 0 to 23
    const minute = 30; // 0 to 59
    const seconds = 0; // 0 to 59

    const date = moment(new Date(year, month, day, hour, minute, seconds)).startOf('day');
    expect(date.utc().format()).toMatchInlineSnapshot(`"2021-10-31T23:00:00Z"`);
  });
});
