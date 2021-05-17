const cache = require("../__stubs__/cache");

// the purpose of this test is to show that
// spies are isolated between tests
// so you don't have to reset anything

describe("spy basic test", () => {
  beforeAll(() => {
    getSpy = jest.spyOn(cache, "get");
    setSpy = jest.spyOn(cache, "set");
  });

  const getset = async (key, value) => {
    await cache.set(key, value);
    return cache.get(key);
  };

  it("spy", async () => {
    const result = await getset("foo", "bar");
    expect(getSpy).toHaveBeenCalledWith("foo");
    expect(result).toEqual("bar");
  });

  afterEach(() => {
    cache.__clearData;
  });
});
