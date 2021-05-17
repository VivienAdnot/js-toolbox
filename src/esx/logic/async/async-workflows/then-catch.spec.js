const Promise = require("bluebird");

describe("then or catch", () => {
  const test = async shouldThrow => {
    if (shouldThrow) {
      throw new Error("BOOM");
    }

    return "ok";
  };

  it("ok", () => {
    const shouldThrow = false;
    return test(shouldThrow).then(result => expect(result).toEqual("ok"));
  });

  it("not ok", () => {
    const shouldThrow = true;
    return test(shouldThrow).catch(err => {
      expect(err.message).toEqual("BOOM");
    });
  });
});

it("throw inside then should be catched later", () => {
  const fn = () =>
    Promise.delay(50)
      .then(() => {
        return Promise.reject(new Error("ERRW"));
      })
      .then(() => {
        return "ok";
      })
      .catch(err => {
        return "fixed";
      });

  return fn().then(result => expect(result).toEqual("fixed"));
});
