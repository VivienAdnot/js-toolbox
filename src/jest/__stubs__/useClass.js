const SomeClass = require('./someClass');

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

class UseClass {
  constructor() {
    this.someClass = new SomeClass();
  }

  foo() {
    // const someStamp = SomeStamp();
    // const result = someStamp.m();
    const result = this.someClass.m();
    console.log(result);
  }
}

module.exports = UseClass