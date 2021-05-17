const _ = require("lodash");

// omit returns a partial copy of an object omitting the keys specified.

describe("lodash", () => {
  describe("omit", () => {
    it("removes props from object", () => {
      const data = {
        foo: "bar",
        comments: [1, 2, 3],
        sharedposts: [4, 5, 6]
      };

      expect(_.omit(data, ["comments", "sharedposts"])).toEqual({ foo: "bar" });
    });

    it('removes nested prop', () => {
      const data = {
        foo: 'bar',
        nested: {
          bazob: 'boom',
          hello: 'coucou'
        }
      };

      expect(_.omit(data, ['nested.hello'])).toEqual({
        foo: 'bar',
        nested: {
          bazob: 'boom',
        }
      })
    });

    it('removes nested prop', () => {
      const data = {
        foo: 'bar',
        nested: {
          bazob: 'boom',
          hello: 'coucou'
        }
      };
      expect(_.omit(data, ['nested.hello', 'foo'])).toEqual({
        nested: {
          bazob: 'boom',
        }
      })
    })

    describe("edge cases", () => {
      it("null", () => {
        const data = null;
        const result = _.omit(data, ["message", "stack", "code"]);

        expect(result).toEqual({});
      });

      it("undefined", () => {
        const data = undefined;
        const result = _.omit(data, ["message", "stack", "code"]);

        expect(result).toEqual({});
      });
    });
  });
});
