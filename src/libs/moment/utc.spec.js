const moment = require('moment');
const momentTz = require('moment-timezone');

describe('utc date', () => {
  describe('french hour to UTC', () => {
    it('winter hour to UTC', () => {
      const date = moment('2021-03-22T16:00:01+01:00');
      expect(date.utc().format()).toMatchInlineSnapshot(`"2021-03-22T15:00:01Z"`);
    });

    it('summer hour to UTC', () => {
      const date = moment('2021-08-22T15:00:01Z');
      expect(date.utc().format()).toMatchInlineSnapshot(`"2021-08-22T15:00:01Z"`);
    });
  });

  describe('UTC to french hour', () => {
    it('utc to winter french hour', () => {
      const date = moment('2021-03-22T15:00:01Z');
      expect(date.format()).toMatchInlineSnapshot(`"2021-03-22T16:00:01+01:00"`);
    });

    it('utc to summer french hour', () => {
      const date = moment('2021-08-22T15:00:01Z');
      expect(date.format()).toMatchInlineSnapshot(`"2021-08-22T17:00:01+02:00"`);
    });

    it('utc to summer french hour', () => {
      const date = moment('2021-06-22T00:00:00Z');
      expect(date.format()).toMatchInlineSnapshot(`"2021-06-22T02:00:00+02:00"`);
    });

    it.only('utc to summer french hour', () => {
      const date = moment('2021-06-27T21:59:00Z');
      expect(date.format()).toMatchInlineSnapshot(`"2021-06-27T23:59:00+02:00"`);
    });
  });

  // example: we have 23:59 UTC. But it's a mistake, it's in reality 23:59 Europe/Paris.
  // So we want to convert it in 21:59 UTC in summer of 22:59 if winter
  describe.only('UTC to french hour to UTC', () => {
    const timeZone = 'Europe/Paris'; 

    const convertFunc = (utcDateTime) => {
      // ignore Zulu
      const momentDateTz = momentTz.tz(utcDateTime, 'YYYY-MM-DD HH:mm:ss', timeZone);
      return momentDateTz.utc().format();
    };

    it('should return 22:59 if winter time', () => {
      expect(convertFunc('2021-03-22T23:59:00Z')).toEqual('2021-03-22T22:59:00Z');
    });

    it('should return 21:59 if summer time', () => {
      expect(convertFunc('2021-07-22T23:59:00Z')).toEqual('2021-07-22T21:59:00Z');
    })
  });
});
