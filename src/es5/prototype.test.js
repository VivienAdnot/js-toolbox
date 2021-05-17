function Db() {}
Db.prototype.foo = function() {
  return "foo";
};

it("", () => {
  var test = new Db();
  expect(test.foo()).toEqual("foo");
});
