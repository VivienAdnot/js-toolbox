const stampit = require('@stamp/it');

const MyObject = stampit({
  methods: {
    foo: () => {
      const a = helper1();
      const b = helper2();
      return a + b;
    }
  }
});

// helpers
const helper1 = () => {
  return 10;
};

const helper2 = () => {
  return 20;
};

module.exports = {
  default: MyObject,
  MyObject,
  helper1,
  helper2
};