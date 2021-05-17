describe('Object.entries', () => {
  it('iterate over object', () => {
    const object = {
      foo: 'bar',
      bar: 'baz',
      baz: 'foo',
    };

    const result = [];

    for (let [key, value] of Object.entries(object)) {
      result.push([key, value]);
    }

    expect(result).toEqual([
      ['foo', 'bar'],
      ['bar', 'baz'],
      ['baz', 'foo'],
    ]);
  });
});

describe('Object.entries', () => {
  it.only('iterate over object', () => {
    const object = {
      foo: 'bar',
      bar: 'baz',
      baz: 'foo',
    };

    const result = Object.entries(object).map(([key, value]) => {
      return [key, value];
    });

    expect(result).toEqual([
      ['foo', 'bar'],
      ['bar', 'baz'],
      ['baz', 'foo'],
    ]);
  });
});
