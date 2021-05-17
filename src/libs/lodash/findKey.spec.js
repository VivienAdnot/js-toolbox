const _ = require("lodash");

describe("lodash findKey Object", () => {
  const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  };

  it("returns key if filter ok", () => { 
    const result = _.findKey(users, function(o) { return o.age < 40; });
    expect(result).toEqual('barney');
  });

  it("returns undefined if filter not ok", () => {
    const result = _.findKey(users, function(o) { return o.age > 100; });
    expect(result).toEqual(undefined);
  });

  it("returns first matched key if filter return multiple results", () => { 
    const result = _.findKey(users, function(o) { return o.age > 30; });
    expect(result).toEqual('barney');
  });
});
