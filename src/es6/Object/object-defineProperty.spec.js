// The static method Object.defineProperty() defines a new property directly on an object,
// or modifies an existing property on an object, and returns the object.

describe("Object", () => {
  describe("defineProperty", () => {
    const object1 = {};

    Object.defineProperty(object1, "prop1", {
      value: 42,
      writable: false
    });

    it("prop1 equals 42", () => {
      expect(object1.prop1).toBe(42);
    });

    it("prop1 is immutable", () => {
      try {
        object1.prop1 = "foo";
      } catch (err) {
        expect(e).toBeDefined();
      }
    });
  });
});
