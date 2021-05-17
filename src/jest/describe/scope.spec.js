// the purpose of this test is to show variables scope

describe("", () => {
  let ctx;
  beforeEach(() => {
    ctx = {};
  });
  const setCache = async (slug, data) => {
    if (ctx.cache) {
      return ctx.cache.set(slug, data);
    }
  };

  it("ok cache", async () => {
    ctx.cache = {
      set: () => "ok"
    };
    const result = await setCache("foo", "bar");
    expect(result).toEqual("ok");
  });

  it("no cache", async () => {
    const result = await setCache("foo", "bar");
    expect(result).toBeUndefined();
  });
});
