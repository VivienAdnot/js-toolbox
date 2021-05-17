const pluck = (...fields) => {
  return fields;
};

it("returns an array", () => {
  expect(pluck.call(this, "coucou", "coucou", "coucou")).toEqual([
    "coucou",
    "coucou",
    "coucou"
  ]);
});
