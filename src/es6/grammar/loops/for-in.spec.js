it("iterate over object keys", () => {
  const object = {
    foo: "bar",
    bar: "baz",
    baz: "foo"
  };

  const keys = [];

  for (let key in object) {
    keys.push(key);
  }

  expect(keys).toEqual(["foo", "bar", "baz"]);
});
