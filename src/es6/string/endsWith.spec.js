const { expectationFailed } = require('boom');

const isKeyAnId = (key) => key.endsWith('id') || key.endsWith('hash');

describe('string.endsWith', () => {
  it('foo_id => true', () => {
    expect(isKeyAnId('foo_id')).toEqual(true);
  });

  it('image_hash => true', () => {
    expect(isKeyAnId('image_hash')).toEqual(true);
  });

  it('imageHash => false', () => {
    expect(isKeyAnId('imageHash')).toEqual(false);
  });

  it('foo => false', () => {
    expect(isKeyAnId('foo')).toEqual(false);
  });
});
