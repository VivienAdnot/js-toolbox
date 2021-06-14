const stampit = require('@stamp/it');
const _ = require('lodash');

const Operations = stampit({
  props: {
    operations: [[], []]
  },
  methods: {
    register(level, operation) {
      this.operations[level].push(operation)
    },
    shiftLevel(level) {
      if (_.isEmpty(this.operations[level])) return [];

      const ops = _.cloneDeep(this.operations[level]);
      this.operations[level] = [];

      return ops;
    },
    reset() {
      for (let level = 0; level < this.operations.length; level++) {
        this.operations[level] = [];
      }
    },
    execute() {
      for (let level = 0; level < this.operations.length; level++) {
        console.log(`execute level ${level}`);
        const operations = this.shiftLevel(level);

        for (let operation of operations) {
          operation();
        }
      }
    }
  },
});

const Factory = stampit(Operations, {
  init() {
    this.register(0, () => { console.log('first op')});
    this.register(0, () => { console.log('second op')});
    this.register(1, () => { console.log('third op')});
    this.register(1, () => { console.log('fourth op')});
  },
  methods: {
    run() {
      this.execute();
    },
  },
});

module.exports = Factory;
