const stampit = require('@stamp/it');
const SomeStamp = require('./someStamp');

// const UseStamp = stampit({
//   init() {
//     this.someStamp = SomeStamp();
//   },
//   methods: {
//     foo() {
//       // const someStamp = SomeStamp();
//       // const result = someStamp.m();
//       const result = this.someStamp.m();
//       console.log(result);
//     }
//   }
// });

// // const runner = UseStamp();
// // runner.foo();

// module.exports = UseStamp

class UseStamp {
  constructor() {
    this.someStamp = SomeStamp();
  }

  foo() {
    // const someStamp = SomeStamp();
    // const result = someStamp.m();
    const result = this.someStamp.m();
    console.log(result);
  }
}

module.exports = UseStamp