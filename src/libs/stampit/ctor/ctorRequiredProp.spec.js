const stampit = require('@stamp/it');

const CtorRequiredProp = require('./ctorRequiredProp.stamp');

it('should throw if ctor required field is undefined', () => {
  let result;
  let err;
  try {
    CtorRequiredProp();
  } catch(error) {
    err = error;
  }

  expect(result).toBeUndefined();
  expect(err.message).toEqual('foo must be defined');
});

it('should pass if ctor required field is defined', () => {
  let result;
  let err;
  try {
    const stamp = CtorRequiredProp({ foo: 'foo' });
    result = stamp.test();
  } catch(error) {
    err = error;
  }

  expect(result).toEqual('foo:bar');
  expect(err).toBeUndefined();
});