const stampit = require('@stamp/it');
let SomeStamp = require('../__stubs__/someStamp');
const _ = require('lodash');

const mMock = jest.fn().mockImplementation(() => 'bazob');

SomeStamp = stampit(SomeStamp, {
  methods: {
    m: mMock,
    coucou() {
      return 'coucou'
    }
  }
});

it('foo', () => {
  const some = SomeStamp();
  some.m();
  console.log(some.coucou());
  console.log(some.y());
  expect(mMock).toHaveBeenCalled();
})