const _ = require('lodash');

// _.every check that all elements of the array are truthy

describe('lodash.every', () => {
  const checkFn = (days, openingHour, closingHour) => {
    return _.every([!_.isEmpty(days), openingHour, closingHour]);
  }

  it('return false because all element of array is falsy', () => {
    const days = [];
    const openingHour = 1;
    const closingHour = 2;

    expect(checkFn(days, openingHour, closingHour)).toEqual(false);
  })

  it('return false because at least one element of array is falsy', () => {
    const days = ['mon'];
    const openingHour = 1;
    const closingHour = null;

    expect(checkFn(days, openingHour, closingHour)).toEqual(false);
  })

  it('return true when all elements of array are truthy', () => {
    const days = ['monday'];
    const openingHour = 1;
    const closingHour = 2;

    expect(checkFn(days, openingHour, closingHour)).toEqual(true);
  })
})