describe('is key in object', () => {
  let actuals = {
    foo: 'bar',
    baz: 'bazob',
  };

  it('key found return true ', () => {
    expect('foo' in actuals).toBe(true);
  });

  it('value found return false', () => {
    expect('bar' in actuals).toBe(false);
  });

  it('not found at all', () => {
    expect('boom' in actuals).toBe(false);
  });
});
