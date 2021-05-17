const Boom = require("boom");

const myHandlerWillFail = async () => {
  return Boom.internal("foo");
};
describe("boom", () => {
  it("internal", () => {
    return myHandlerWillFail().catch(err => {
      console.log(err);
      return expect(err).toBeInstanceOf(Boom);
    });
  });
});
