const _ = require('lodash');

describe('_.toNumber', () => {
  describe('simple examples', () => {
    it('3.2', () => {
      expect(_.toNumber('3.2')).toEqual(3.2);
    });
  });

  describe('edge cases', () => {
    it('null', () => {
      expect(_.toNumber(null)).toEqual(0);
    });
    it('undefined', () => {
      expect(_.toNumber(undefined)).toEqual(NaN);
    });

    it('NaN', () => {
      expect(_.toNumber(NaN)).toEqual(NaN);
    });
  });
});
