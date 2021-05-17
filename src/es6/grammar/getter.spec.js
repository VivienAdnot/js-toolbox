const createFactory = () => {
  const _data = {
    foo: "bar"
  };

  return {
    get data() {
      return _data;
    }
  };
};

it("getter", () => {
  const factory = createFactory();
  expect(factory.data).toEqual({ foo: "bar" });
});
