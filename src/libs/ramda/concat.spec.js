const R = require("ramda");
const { inspect } = require("util");

// concat takes 2 arrays or 2 strings and returns a new one
// concat expects both arguments to have same type

describe("ramda", () => {
  describe("concat", () => {
    describe("arrays", () => {
      it("basic test", () => {
        const data1 = [1, 2, 3];
        const data2 = [4, 5, 6];

        expect(R.concat(data1, data2)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(data1).toEqual([1, 2, 3]);
        expect(data2).toEqual([4, 5, 6]);
      });

      it("nested arrays", () => {
        const array1 = [
          {
            data: {
              foo: {
                bar: {
                  baz: 10
                }
              }
            }
          }
        ];

        const array2 = [
          {
            data: {
              foo: {
                bar: {
                  baz: 20
                }
              }
            }
          }
        ];

        const result = R.concat(array1, array2);

        expect(result).toEqual([
          {
            data: { foo: { bar: { baz: 10 } } }
          },
          {
            data: { foo: { bar: { baz: 20 } } }
          }
        ]);
      });
    });

    it("strings", () => {
      expect(R.concat("ABC", "DEF")).toEqual("ABCDEF");
    });

    it("throws if mixed types", () => {
      try {
        return R.concat([1, 2, 3], "foo");
      } catch (err) {
        expect(err.message).toEqual('"foo" is not an array');
      }
    });
  });
});
