const stampit = require('@stamp/it');

const SomeStamp = stampit({
  methods: {
    m() {
      return [1,2,3]
    },
    y() {
      return 'bob'
    }
  }
});

module.exports = SomeStamp;