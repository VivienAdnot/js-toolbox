const moment = require('moment');
const momentTz = require('moment-timezone');

// warning: i created these tests in winter, so GMT+1
// in summer, they may fail because we will pass in GMT+2

describe('start / end of day', () => {
  it('return start of the day', () => {
    const date = moment('2021-11-01T15:00:00Z');
    date.startOf('day');
    expect(date.format()).toMatchInlineSnapshot(`"2021-11-01T00:00:00+01:00"`);
  });

  it('return start of the day utc', () => {
    const date = moment('2021-11-01T15:00:00Z');
    date.startOf('day');
    expect(date.utc().format()).toMatchInlineSnapshot(`"2021-10-31T23:00:00Z"`);
  });

  it('return end of the day', () => {
    const date = moment('2021-11-01T15:00:00Z');
    date.endOf('day');
    expect(date.format()).toMatchInlineSnapshot(`"2021-11-01T23:59:59+01:00"`);
  });

  it('return end of the day utc', () => {
    const date = moment('2021-11-01T15:00:00Z');
    date.endOf('day');
    expect(date.utc().format()).toMatchInlineSnapshot(`"2021-11-01T22:59:59Z"`);
  });
});

describe('set hour / minutes of day', () => {
  describe('set 23:59:59 of day', () => {
    it('basic usecase', () => {
      const dateToStore = '2021-03-30 10:34:29';
      const momentDate = moment(dateToStore);

      momentDate.set({ hour: 23, minute: 59, second: 59 });
      expect(momentDate.format()).toMatchInlineSnapshot(`"2021-03-30T23:59:59+02:00"`);
    });

    describe('of march (gmt+2)', () => {
      it('with timezone', () => {
        const dateToStore = '2021-03-30 10:34:29';
        const momentDate = momentTz.tz(dateToStore, 'Europe/Paris');

        momentDate.set({ hour: 23, minute: 59, second: 59 });
        expect(momentDate.format()).toMatchInlineSnapshot(`"2021-03-30T23:59:59+02:00"`);
      });

      it('with timezone and return UTC Date', () => {
        const dateToStore = '2021-03-30 10:34:29';
        const momentDate = momentTz.tz(dateToStore, 'Europe/Paris');

        momentDate.set({ hour: 23, minute: 59, second: 59 });
        expect(momentDate.toISOString()).toMatchInlineSnapshot(`"2021-03-30T21:59:59.000Z"`);
      });
    });

    describe('of january (gmt+1)', () => {
      it('with timezone', () => {
        const dateToStore = '2021-01-30 10:34:29';
        const momentDate = momentTz.tz(dateToStore, 'Europe/Paris');

        momentDate.set({ hour: 23, minute: 59, second: 59 });
        expect(momentDate.format()).toMatchInlineSnapshot(`"2021-01-30T23:59:59+01:00"`);
      });

      it('with timezone and return UTC Date', () => {
        const dateToStore = '2021-01-30 10:34:29';
        const momentDate = momentTz.tz(dateToStore, 'Europe/Paris');

        momentDate.set({ hour: 23, minute: 59, second: 59 });
        expect(momentDate.toISOString()).toMatchInlineSnapshot(`"2021-01-30T22:59:59.000Z"`);
      });
    });
  });
});

describe('in 3 days', () => {
  it.only('from today', () => {
    const now = '2021-04-02 15:20:29';
    const momentDate = moment(now);
    momentDate.add(3, 'days');
    momentDate.startOf('day');
    expect(momentDate.toISOString()).toMatchInlineSnapshot(`"2021-04-04T22:00:00.000Z"`);
  });
});
