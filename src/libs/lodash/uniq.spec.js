const _ = require("lodash");

describe("lodash", () => {
  describe("uniq", () => {
    it("filter simple array of numbers", () => {
      const array = [1, 2, 2, 3, 3, 4, 4];
      expect(_.uniq(array)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("uniqBy", () => {
    describe("filter array of objects by property", () => {
      it("example 1", () => {
        const array = [{ x: 1 }, { x: 2 }, { x: 1 }];
        expect(_.uniqBy(array, "x")).toEqual([{ x: 1 }, { x: 2 }]);
      });

      it("example 2 with real data", () => {
        const array = [
          {
            uri: "https://www.facebook.com/638194369531021",
            country: "lb",
            fetchingMode: "full-comments"
          },
          {
            uri: "https://www.facebook.com/765996796759020",
            country: "fr",
            fetchingMode: "full-comments"
          },
          {
            uri: "https://www.facebook.com/638194369531021",
            country: "us",
            fetchingMode: "basic"
          }
        ];
        expect(_.uniqBy(array, "uri")).toEqual([
          {
            uri: "https://www.facebook.com/638194369531021",
            country: "lb",
            fetchingMode: "full-comments"
          },
          {
            uri: "https://www.facebook.com/765996796759020",
            country: "fr",
            fetchingMode: "full-comments"
          }
        ]);
      });
    });
  });
});
