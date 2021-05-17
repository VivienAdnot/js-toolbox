it("replace will only replace the first occurence from sentence", () => {
  const sentence = "foo bar baz";
  const newSentence = sentence.replace(" ", "");

  expect(newSentence).toEqual("foobar baz");
  expect(sentence).toEqual("foo bar baz");
});

it("replace all spaces in sentence with regex", () => {
  const sentence = "foo bar baz";
  const newSentence = sentence.replace(/ /g, "");

  expect(newSentence).toEqual("foobarbaz");
  expect(sentence).toEqual("foo bar baz");
});
