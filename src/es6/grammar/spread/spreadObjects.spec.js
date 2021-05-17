const _ = require("lodash");

describe("spread objects", () => {
  it("add properties to existing object", () => {
    const test = { prop: "boomboom" };

    const test2 = {
      ...test,
      foo: "bar"
    };

    expect(test2).toEqual({
      prop: "boomboom",
      foo: "bar"
    });
  });

  it("override existing property", () => {
    const test = {
      foo: "bar",
      bar: "baz"
    };
    const test2 = {
      ...test,
      foo: "baz"
    };

    expect(test2).toEqual({
      foo: "baz",
      bar: "baz"
    });
  });

  describe("merge objects", () => {
    it("basic merge", () => {
      let test1 = { firstname: "vivien", lastname: "adnot" };
      let test2 = { job: "dev" };
      let merge1 = { ...test1, ...test2 };

      expect(merge1).toEqual({
        firstname: "vivien",
        lastname: "adnot",
        job: "dev"
      });
    });

    it("merge and override property", () => {
      const defaultMessagingOptions = {
        timeToLive: 1234,
        priority: "normal"
      };

      const options = { timeToLive: 500 };

      const messagingOptions = {
        ...defaultMessagingOptions,
        ...options,
        priority: "high"
      };

      expect(messagingOptions).toEqual({
        timeToLive: 500,
        priority: "high"
      });
    });
  });

  describe("object deep merge DOES NOT WORK because spread merge is shallow", () => {
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

      const returnedTarget = { ...target, ...source };

      expect(returnedTarget).toEqual({ a: 1, b: { foo: "baz" }, c: 5 });
    });

    it("deep merge objects depth 2 ", () => {
      const target = {
        a: 1,
        b: {
          foo: {
            bar: "before"
          },
          baz: "before"
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

      const returnedTarget = { ...target, ...source };

      const result = {
        a: 1,
        b: {
          foo: {
            bar: "after"
          }
        },
        c: 5
      };

      expect(returnedTarget).toEqual(result);
    });
  });
});
