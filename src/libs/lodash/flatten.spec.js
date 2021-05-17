const _ = require("lodash");

describe("lodash", () => {
  it("flatten one depth", () => {
    const array = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2]
    ];
    expect(_.flatten(array)).toEqual([1, 2, 3, 4, 1, 2, 3, 4, 1, 2]);
  });

  it("flattens only 1 depth", () => {
    const array = [
      [1, 2, 3, 4, [1, 2]],
      [1, 2, 3, 4],
      [1, 2]
    ];
    expect(_.flatten(array)).toEqual([1, 2, 3, 4, [1, 2], 1, 2, 3, 4, 1, 2]);
  });

  it("flattens object values", () => {
    const illegalTokensGroups = {
      and: [" AND ", " and ", "And"],
      or: [" OR ", " or ", " Or"],
      quotes: ["'", '"'],
      brackets: ["(", ")", "[", "]"],
      commas: [",", ";"]
    };

    const illegalTokens = _.flatten(Object.values(illegalTokensGroups));
    expect(illegalTokens).toEqual([
      " AND ",
      " and ",
      "And",
      " OR ",
      " or ",
      " Or",
      "'",
      '"',
      "(",
      ")",
      "[",
      "]",
      ",",
      ";"
    ]);
  });
});
