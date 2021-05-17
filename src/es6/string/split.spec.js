it("extract words from sentence", () => {
  const sentence = "foo bar baz";
  const words = sentence.split(" ");

  expect(words).toEqual(["foo", "bar", "baz"]);
});

it("extract words from sentence and remove empty items", () => {
  const sentence = " foo    bar   baz";
  const words = sentence.split(" ").filter(word => word && word.length > 0);

  expect(words).toEqual(["foo", "bar", "baz"]);
});

it("extract words from sentence", () => {
  const sentence = " foo    bar   baz\ncoucou";
  const words = sentence.split(/\s+/).filter(word => !! word)

  expect(words).toEqual(["foo", "bar", "baz", "coucou" ]);
});
