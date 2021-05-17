const Promise = require("bluebird");

describe("Promise.each", () => {
  const arrayOK = [10, 20, 30, 40];
  const arrayNotOK = [10, 20, 60, 40];
  const max = 50;
  let counter = 0;

  const callback = () => {
    counter++;
  };

  const test = source => {
    return Promise.each(source, element => {
      callback();
      if (element < max) return;
      return Promise.reject(new Error("element > max"));
    });
  };

  beforeAll(() => {
    counter = 0;
  });

  it("calls callback and returns source unchanged", () => {
    return test(arrayOK).then(result => {
      expect(result).toEqual(arrayOK);
      return expect(counter).toEqual(4);
    });
  });

  it("calls callback and returns source unchanged", () => {
    return test(arrayNotOK).catch(err => {
      return expect(err.message).toEqual("element > max");
    });
  });
});
