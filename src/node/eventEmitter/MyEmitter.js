const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  action() {
    global.setTimeout(() => {
      this.emit("data", { foo: "bar" });
    }, 1000);
  }
}

module.exports = MyEmitter;
