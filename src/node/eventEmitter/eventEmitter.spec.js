const MyEmitter = require("./MyEmitter");

describe("MyEmitter", () => {
  it("ctor", () => {
    const emitter = new MyEmitter();
    expect(emitter).toBeDefined();
  });

  it("received data", done => {
    const emitter = new MyEmitter();
    emitter.on("data", data => {
      expect(data).toEqual({ foo: "bar" });
      done();
    });

    emitter.action();
  });
});
