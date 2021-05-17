class Foo {
  constructor() {
    this.name = this.constructor.name;
  }
}

class Bar {
  constructor() {
    this.name = this.constructor.name;
  }
}

module.exports = {
  Foo,
  Bar
};
