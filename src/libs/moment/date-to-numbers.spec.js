const moment = require('moment')

describe('Date', () => {
  const startDate = {
    isoString: "2021-11-01T00:00:00Z",
    expected: {
      year: 2021,
      month: 11,
      day: 1 
    }
  };

  const endDate = {
    isoString: "2021-12-30T00:00:00Z",
    expected: {
      year: 2021,
      month: 12,
      day: 30
    }
  };

  const dates = [startDate, endDate];

  dates.forEach(({ isoString, expected }) => {
    it(`should transform ${isoString} into number`, () => {
      const date = moment(isoString);

      const result = {
        year: date.year(),
        month: date.month() + 1,
        day: date.date(), // the trick is here !!!
      };

      expect(result).toEqual(expected);
    })
  });
});