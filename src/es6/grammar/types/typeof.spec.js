describe("typeof", () => {
  const xpect = ({ title, value, expected }) => {
    it(title, () => {
      const result = typeof value;
      expect(result).toEqual(expected);
    });
  };

  describe("exceptions", () => {
    xpect({
      title: "null",
      value: null,
      expected: "object"
    });

    xpect({
      title: "undefined",
      value: undefined,
      expected: "undefined"
    });
  });

  describe("numbers", () => {
    xpect({
      title: "1",
      value: 1,
      expected: "number"
    });

    xpect({
      title: "0",
      value: 0,
      expected: "number"
    });

    xpect({
      title: "0.5",
      value: 0.5,
      expected: "number"
    });
  });

  describe("string", () => {
    xpect({
      title: "string",
      value: "str",
      expected: "string"
    });
  });

  describe("object", () => {
    xpect({
      title: "empty object",
      value: {},
      expected: "object"
    });

    xpect({
      title: "not empty object",
      value: { foo: "bar" },
      expected: "object"
    });
  });

  describe("array", () => {
    xpect({
      title: "empty array",
      value: [],
      expected: "object"
    });

    xpect({
      title: "array[Number]",
      value: [1, 2],
      expected: "object"
    });

    xpect({
      title: "array[Object]",
      value: [{ foo: "bar" }, { foo: "baz" }],
      expected: "object"
    });
  });

  describe("function", () => {
    xpect({
      title: "function",
      value: () => {
        return "ok";
      },
      expected: "function"
    });

    it("typeof function", () => {
      const result = {
        entities: {
          toJS: () => {
            return "ok";
          }
        }
      };

      expect(typeof result.entities.toJS).toEqual("function");
    });
  });
});
