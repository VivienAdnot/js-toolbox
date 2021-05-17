const Promise = require("bluebird");

describe("bluebird.timeout", () => {
  it("should success", async () => {
    const fn = () => Promise.resolve("foo");
    const result = await fn().timeout(1000);
    expect(result).toEqual("foo");
  });

  it("should reject", async () => {
    let result;
    try {
      const fn = () => Promise.reject(new Error("bar"));
      await fn().timeout(1000);
    } catch (err) {
      result = err.message;
    }

    expect(result).toEqual("bar");
  });

  it("should timeout", async () => {
    let result;

    const fn = async () => {
      return new Promise(resolve => {
        global.setTimeout(() => {
          resolve("baz");
        }, 1000);
      });
    };

    try {
      result = await Promise.resolve(fn()).timeout(100);
    } catch (err) {
      result = err.message;
    }

    expect(result).toEqual("operation timed out");
  });
});
