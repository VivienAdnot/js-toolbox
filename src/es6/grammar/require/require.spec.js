const { BoomBoom, Foo, Bar } = require("./index");

describe("require", () => {
  it("", () => {
    const boomBoom = new BoomBoom();
    const foo = new Foo();
    const bar = new Bar();

    expect(BoomBoom.name).toEqual("BoomBoom");
    expect(foo.name).toEqual("Foo");
    expect(bar.name).toEqual("Bar");
  });
});
