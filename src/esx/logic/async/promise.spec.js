const createEsClient = require("./__stubs__/es");
const esClient = createEsClient();

it("Promise", () => {
  const esInsert = esClient.upsertEntities();

  return esInsert.then(result => {
    return expect(result).toEqual({
      foo: "bar"
    });
  }).catch(err => {
    console.log(error);
    expect(0).toBe(1)
  })
});

it('catch', () => {
  const getAdvertiserTags = () => Promise.reject('foo');
  getAdvertiserTags().catch(() => {
    expect(1).toBe(1)
  });
});