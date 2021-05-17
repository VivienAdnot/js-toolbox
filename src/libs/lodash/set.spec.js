const _ = require("lodash");

describe("lodash", () => {
  // Sets the value at path of object. If a portion of path doesn't exist, it's created.
  // Arrays are created for missing index properties while objects are created for all other missing properties.
  describe("set", () => {
    it("string", () => {
      var object = { a: [{ b: { c: 3 } }] };

      _.set(object, "a[0].b.c", 4);
      expect(object.a[0].b.c).toEqual(4);
    });

    it("array", () => {
      var object = { a: [{ b: { c: 3 } }] };

      _.set(object, ["x", "0", "y", "z"], 5);
      expect(object.x[0].y.z).toEqual(5);
    });

    it("key as number", () => {
      var object = {};

      _.set(object, ["foo", "bar", "00"], 1);
      expect(object).toEqual({
        foo: {
          bar: {
            "00": 1
          }
        }
      });
    });
  });

  // Use _.setWith to customize path creation.
  describe("setWith", () => {
    it("official doc example", () => {
      var object = {};
      _.setWith(object, "[0][1]", "a", Object);

      expect(object).toEqual({
        0: {
          1: "a"
        }
      });
    });

    it("array", () => {
      var object = {};
      _.setWith(object, ["0", "1"], "a", Object);

      expect(object).toEqual({
        "0": {
          "1": "a"
        }
      });
    });
  });
});
