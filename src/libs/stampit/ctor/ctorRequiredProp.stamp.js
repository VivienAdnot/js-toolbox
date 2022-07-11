const stampit = require('@stamp/it');

const CtorRequiredProp = stampit({
  props: {
    foo: undefined
  }, 
  init({ foo }) {
    if (!foo) {
      throw new Error('foo must be defined');
    }
    this.foo = foo;
  },
  props: {
    test() {
      return this.foo + ':bar';
    }
  }
});

module.exports = CtorRequiredProp;