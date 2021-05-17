const moment = require('moment');

const validDates = ['2021-03-17T12:43:45.016Z'];

const invalidDates = ['bob'];

describe('these dates are valid', () => {
  validDates.forEach(date => {
    it(date, () => {
      const m = moment(date);
      expect(m.isValid()).toBe(true);
    })
  })
})

describe('these dates are invalid', () => {
  invalidDates.forEach(date => {
    it(date, () => {
      const m = moment(date);
      expect(m.isValid()).toBe(false);
    })
  })
})