const diffjson = require("json-patch-gen");

describe("diffjson", () => {
  const result = diffjson([], []);

  describe("add", () => {
    it("empty object - object", () => {
      expect(diffjson({}, { foo: "bar" })).toEqual([
        { op: "add", path: "/foo", value: "bar" },
      ]);
    });

    it("empty object - big object", () => {
      const is = {
        a: {
          complicated: {
            object: {
              with: {
                fields: [{ foo: "bar" }],
              },
            },
          },
        },
        foo: 'bar',
      };

      const newValue = { this: { is } };
      const diff = diffjson({}, newValue);

      expect(diff).toEqual([{ op: "add", path: "/this", value: { is } }]);
    });

    it("empty array - 1 item array", () => {
      expect(diffjson([], [1])).toEqual([{ op: "add", path: "/0", value: 1 }]);
    });
  });

  describe("replace", () => {
    it("update object - object", () => {
      expect(diffjson({ foo: "bar" }, { foo: "baz" })).toEqual([
        { op: "replace", path: "/foo", value: "baz" },
      ]);
    });

    it("update nested field", () => {
      const origValue = { foo: { bar: "baz" } };
      const newValue = { foo: { bar: "quux" } };

      expect(diffjson(origValue, newValue)).toEqual([
        { op: "replace", path: "/foo/bar", value: "quux" },
      ]);
    });
  });

  describe("remove", () => {
    it("object - empty object", () => {
      expect(diffjson({ foo: "bar" }, {})).toEqual([
        { op: "remove", path: "/foo" },
      ]);
    });
  });

  describe("mixed actions", () => {
    it("array number", () => {
      expect(diffjson([1, 2, 3], [2, 3, 4])).toEqual([
        { op: "add", path: "/3", value: 4 },
        { op: "remove", path: "/0" },
      ]);
    });

    it("array object", () => {
      const origValue = [{ foo: "bar" }, 3];
      const newValue = [{ foo: "baz" }, 3, 4];

      expect(diffjson(origValue, newValue)).toEqual([
        { op: "add", path: "/2", value: 4 },
        { op: "replace", path: "/0/foo", value: "baz" },
      ]);
    });

    it("nested object", () => {
      const origValue = { foo: { bar: [1, 2, 3] } };
      const newValue = { foo: { bar: [2, 3, 4] } };

      expect(diffjson(origValue, newValue)).toEqual([
        { op: "add", path: "/foo/bar/3", value: 4 },
        { op: "remove", path: "/foo/bar/0" },
      ]);
    });
  });

  describe("edge cases", () => {
    it("empty array - empty array", () => {
      expect(diffjson([], [])).toEqual([]);
    });

    it("empty object - empty object", () => {
      expect(diffjson({}, {})).toEqual([]);
    });
  });
});
