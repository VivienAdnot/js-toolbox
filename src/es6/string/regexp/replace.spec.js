describe('string replace', () => {
  it('replaces with string replaces only the first occurence', () => {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    const result = 'The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?';

    expect(p.replace('dog', 'monkey')).toEqual(result);
  });

  it('replaces with regex replaces only the first occurence', () => {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    const result = 'The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?';

    expect(p.replace(/dog/, 'ferret')).toEqual(result);
  })

  it('replaces with global regex replaces all the occurences', () => {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    const result = 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?';

    expect(p.replace(/dog/g, 'ferret')).toEqual(result);
  })
})

describe('numbers', () => {
  it("test", () => {
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const value = 2;
    const result = value.toFixed(0).replace(rx, '$1')
    expect(result).toEqual('2');
  })
})

const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
const fn = (value) => {
  const result = value.toFixed(0).replace(rx, '$1');
  console.log(`${value} => ${result}`);
}

[0.01, 0.05, 0.1, 0.4, 0.7, 1, 1.1, 1.5, 1.8, 1.932, 2, 10, 100, 1000].forEach(value => {
  fn(value)
})