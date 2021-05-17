describe("JSON.parse", () => {
  const xpect = ({ title, value, expected, shouldError }) => {
    it(title, () => {
      const str = JSON.stringify(value);
      try {
        const result = JSON.parse(str);
        expect(typeof result).toEqual(expected);
      } catch (error) {
        if (shouldError) {
          return expect(1).toBe(1);
        }
        console.log({ title, value, expected, error });
        expect(0).toBe(1);
      }
    });
  };

  describe("exceptions", () => {
    xpect({
      title: "null",
      value: null,
      shouldError: true
    });

    xpect({
      title: "undefined",
      value: undefined,
      shouldError: true
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
});
