const dateFns = require("date-fns");

const startDate = new Date("2018-08-12T22:00:00.000Z");

const compareFn = lastTimestamp => {
  return dateFns.isAfter(startDate, lastTimestamp);
};

describe("date-fns", () => {
  it("test 1", () => {
    const lastTimestamp = dateFns.toDate(1565188228000);
    expect(compareFn(lastTimestamp)).toBe(false);
  });

  it("test 2", () => {
    const lastTimestamp = 1565188228000;
    expect(compareFn(lastTimestamp)).toBe(false);
  });
});
