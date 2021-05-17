// Official Documentation:
// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// It will return the target object.

// Vivien:
// merge objects.
// deep merge ok until depth 3 (no tested after but I suppose it's ok. Deep merge ok for objects and arrays).

describe("Object.assign", () => {
  it("merges objects shallow", () => {
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    const foo = { a: 1, b: 2 };
    const bar = { b: 4, c: 5 };
    const baz = { ...foo, ...bar };

    expect(target).toEqual({ a: 1, b: 4, c: 5 });
    expect(returnedTarget).toEqual({ a: 1, b: 4, c: 5 });
    expect(baz).toEqual({ a: 1, b: 4, c: 5 });
  });

  describe("object deep merge", () => {
    it("deep merge objects depth 1", () => {
      const target = {
        a: 1,
        b: {
          foo: "bar"
        }
      };
      const source = {
        b: {
          foo: "baz"
        },
        c: 5
      };

      const returnedTarget = Object.assign(target, source);

      expect(target).toEqual({ a: 1, b: { foo: "baz" }, c: 5 });
      expect(returnedTarget).toEqual({ a: 1, b: { foo: "baz" }, c: 5 });
    });

    it("deep merge objects depth 2", () => {
      const target = {
        a: 1,
        b: {
          foo: {
            bar: "before"
          }
        }
      };
      const source = {
        b: {
          foo: {
            bar: "after"
          }
        },
        c: 5
      };

      const returnedTarget = Object.assign(target, source);

      const result = {
        a: 1,
        b: {
          foo: {
            bar: "after"
          }
        },
        c: 5
      };

      expect(target).toEqual(result);
      expect(returnedTarget).toEqual(result);
    });

    it("deep merge objects depth 3", () => {
      const target = {
        a: 1,
        b: {
          foo: {
            bar: {
              baz: "before"
            }
          }
        }
      };
      const source = {
        b: {
          foo: {
            bar: {
              baz: "after"
            }
          }
        },
        c: 5
      };

      const returnedTarget = Object.assign(target, source);

      const result = {
        a: 1,
        b: {
          foo: {
            bar: {
              baz: "after"
            }
          }
        },
        c: 5
      };

      expect(target).toEqual(result);
      expect(returnedTarget).toEqual(result);
    });
  });

  describe("array merge", () => {
    it("arrays[Number] are updated", () => {
      const target = {
        a: 1,
        b: {
          foo: [1, 2]
        }
      };
      const source = {
        b: {
          foo: [3, 4]
        },
        c: 5
      };

      const returnedTarget = Object.assign(target, source);

      const result = {
        a: 1,
        b: {
          foo: [3, 4]
        },
        c: 5
      };

      expect(target).toEqual(result);
      expect(returnedTarget).toEqual(result);
    });

    it("arrays[Object] are updated", () => {
      const target = {
        a: 1,
        b: {
          foo: [
            {
              bar: "baz",
              bob: {
                isHuman: false
              }
            },
            2
          ]
        }
      };

      const source = {
        b: {
          foo: [
            {
              bar: "bazob",
              bob: {
                isHuman: true
              }
            },
            2
          ]
        },
        c: 5
      };

      const returnedTarget = Object.assign(target, source);

      const result = {
        a: 1,
        b: {
          foo: [
            {
              bar: "bazob",
              bob: {
                isHuman: true
              }
            },
            2
          ]
        },
        c: 5
      };

      expect(target).toEqual(result);
      expect(returnedTarget).toEqual(result);
    });
  });
});
