var jsonpath = require("jsonpath");

describe("jsonpath", () => {
  it("query", () => {
    var cities = [
      { name: "London", population: 8615246 },
      { name: "Berlin", population: 3517424 },
      { name: "Madrid", population: 3165235 },
      { name: "Rome", population: 2870528 },
    ];

    var names = jsonpath.query(cities, "$..name");

    expect(names).toEqual(["London", "Berlin", "Madrid", "Rome"]);
  });
});
