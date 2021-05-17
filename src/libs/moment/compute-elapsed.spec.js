const moment = require('moment');

describe('compute duration in days between 2 dates', () => {
  it('ignores last day if timestamp is greenwich', () => {
    const start = moment('2021-11-01T00:00:00Z');
    const end = moment('2021-12-30T00:00:00Z');

    const diff = end.diff(start, 'days');
    expect(diff).toEqual(59);
  });

  it('do not ignore last day', () => {
    const start = moment('2021-11-01T15:00:00Z');
    start.startOf('day');
    const end = moment('2021-12-30T23:59:59Z');

    const diff = end.diff(start, 'days');
    expect(diff).toEqual(60);
  });

  it('must return 2 days', () => {
    const start = moment('2021-05-01T00:00:00Z');
    const end = moment('2021-05-02T23:59:00Z');

    const diff = end.diff(start, 'days') + 1;
    expect(Math.round(diff)).toEqual(2);
  });

  it('force end day at end of the day', () => {
    const start = moment('2021-11-01T15:00:00Z');
    const end = moment('2021-12-30T23:00:00Z');
    end.endOf('day');

    const diff = end.diff(start, 'days');
    expect(diff).toEqual(60);
  });

  it('another way to force end day at end of the day', () => {
    const start = moment('2021-11-01T15:00:00Z');
    start.startOf('day');
    const end = moment('2021-12-30T23:00:00Z');

    const diff = end.diff(start, 'days');
    expect(diff).toEqual(60);
  });

  it('accept fragments of day', () => {
    const start = moment('2021-11-01T15:00:00Z');
    start.startOf('day');
    const end = moment('2021-12-30T23:59:59Z');

    const diff = end.diff(start, 'days', true);
    expect(diff).toMatchInlineSnapshot(`60.04165509259259`);
  });
});