it("spread await result", () => {
  const build = index => {
    return Promise.resolve({
      foo: "bar",
      index
    });
  };

  const myFn = async () => {
    return {
      1: {
        bar: "baz",
        ...(await build(1))
      },
      2: {
        bar: "baz",
        ...(await build(2))
      }
    };
  };

  return myFn().then(result => {
    return expect(result).toEqual({
      1: {
        bar: "baz",
        foo: "bar",
        index: 1
      },
      2: {
        bar: "baz",
        foo: "bar",
        index: 2
      }
    });
  });
});
