const foobar = require("./foobar");

class BoomBoom {
  constructor() {
    this.name = this.constructor.name;
  }
}

module.exports = {
  BoomBoom,
  ...foobar
};
