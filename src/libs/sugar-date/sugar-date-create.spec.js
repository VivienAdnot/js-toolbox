const Sugar = require("sugar-date");

describe("sugar-date", () => {
  it("create", () => {
    const dateStr = "2018-01-01";
    const date = Sugar.Date.create(dateStr);
    console.log(date);
    console.log(typeof date);
    expect(date).toBeDefined();
  });
});
