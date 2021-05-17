const moment = require('moment');
const momentTz = require('moment-timezone');

describe('moment timestamp', () => {
  const TIMESTAMPFORMAT = 'YYYY-MM-DDTHH:mm:ssZZ';
  const utcDate = '2021-03-17T12:43:45.016Z';
  const frenchWinterDate = '2021-03-17T13:43:45+0100';

  it('formats utc to french winter date', () => {
    const m = moment(utcDate);
    expect(m.format(TIMESTAMPFORMAT)).toMatchInlineSnapshot(`"2021-03-17T13:43:45+0100"`);
  });

  it('formats utc date to another utc date', () => {
    const m = moment(utcDate);
    expect(m.utc().format(TIMESTAMPFORMAT)).toMatchInlineSnapshot(`"2021-03-17T12:43:45+0000"`);
  });

  it('formats utc date to iso string', () => {
    const m = moment(utcDate);
    expect(m.utc().toISOString()).toMatchInlineSnapshot(`"2021-03-17T12:43:45.016Z"`);
  });

  it('formats french date to iso string', () => {
    const m = moment(frenchWinterDate);
    expect(m.toISOString()).toMatchInlineSnapshot(`"2021-03-17T12:43:45.000Z"`);
  });

  it('formats generic Europe/Paris date to utc date', () => {
    const dateToStore = '2021-03-30 10:34:29';
    const timeZone = 'Europe/Paris'; // 'UTC+02:00'

    const momentDateTz = momentTz.tz(dateToStore, 'YYYY-MM-DD HH:mm:ss', timeZone);
    expect(momentDateTz.format(TIMESTAMPFORMAT)).toMatchInlineSnapshot(`"2021-03-30T10:34:29+0200"`);
  });
});
