const moment = require('moment');

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
  });
});
