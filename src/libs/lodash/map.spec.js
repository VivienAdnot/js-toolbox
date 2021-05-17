const _ = require("lodash");

describe("lodash", () => {
  describe("map", () => {
    describe("apply transformation function", () => {
      const double = n => n * 2;

      it("double array items", () => {
        const result = _.map([4, 8], double);
        expect(result).toEqual([8, 16]);
      });

      describe("double all object properties", () => {
        it("normal usecase", () => {
          const result = _.map({ a: 4, b: 8 }, double);
          expect(result).toEqual([8, 16]);
        });

        describe("edge usecases", () => {
          it("empty object", () => {
            const result = _.map({}, double);
            expect(result).toEqual([]);
          });

          it("null", () => {
            const result = _.map(null, double);
            expect(result).toEqual([]);
          });

          it("not all values are numbers", () => {
            const data = [{ a: 4, b: "foo", c: 12 }];
            const result = _.map(data, double);

            // it returns NaN it encounters error
            // regardless whether the error appears on the first item or later
            expect(result).toEqual([NaN]);
          });
        });
      });
    });

    it("get part of array", () => {
      const users = [{ name: "foo" }, { name: "bar" }];

      const result = _.map(users, "name");
      expect(result).toEqual(["foo", "bar"]);
    });
  });
});

it("lodash._map real useCases", () => {
  const sharedposts = [
    {
      comments: {
        data: [{ id: 1 }, { id: 2 }]
      }
    },
    {
      comments: {
        data: [{ id: 4 }, { id: 5 }]
      }
    }
  ];

  const result = _.flatten(_.map(sharedposts, "comments.data"));

  expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }]);
});
