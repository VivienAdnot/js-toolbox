const text = `FOO \
BAR \
BAZ`;

it("should render an inline string", () => {
  expect(text).toEqual("FOO BAR BAZ");
});
