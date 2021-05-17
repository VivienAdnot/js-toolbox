const { promisify } = require("util");

const fn = (num, factor, cb) => {
  const rest = num % factor;
  if (rest) {
    cb(null, rest);
  } else {
    cb("foo", null);
  }
};

const fooFn = promisify(fn);

describe("foo", () => {
  it("yes", () => {
    return fooFn(3, 2).then(rest => {
      return expect(rest).toBe(1);
    });
  });

  it("no", () => {
    return fooFn(4, 2).catch(err => {
      return expect(err).toBeDefined();
    });
  });
});
