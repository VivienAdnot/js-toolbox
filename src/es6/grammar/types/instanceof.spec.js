class ElasticBadResponseError extends Error {}

const myFunc = async () => {
  throw new ElasticBadResponseError("foo");
};

it("custom error", async () => {
  return myFunc().catch(err => {
    expect(err).toBeInstanceOf(ElasticBadResponseError);
    return expect(err.message).toEqual("foo");
  });
});
