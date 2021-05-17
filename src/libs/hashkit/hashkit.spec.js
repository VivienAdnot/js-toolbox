var Hashkit = require("hashkit");

it("generates a string 4 characters", () => {
  const hashkit = new Hashkit("&@4(7!9804435)");
  const hash = hashkit.encode(1000);
  expect(hash).toEqual("Jl3P");
});
