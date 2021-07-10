
describe('should loop over keys', () => {
  const fn = (data) => {
    const result = [];
    for (const key of Object.keys(data)) {
      const value = data[key];
      result.push({ key, value });
    }
    return result;
  }
  
  const fn2 = (data) => {
    const result = [];
    for (const [key, value] of Object.entries(data)) {
      result.push({ key, value });
    }
    return result;
  }

  it('fn2', () => {
    const data = {
      foo: 'bar',
      bazob: {
        boom: 'coucou'
      }
    };
  
    const expectedResult = [{
      key: 'foo',
      value: 'bar'
    }, {
      key: 'bazob',
      value: {
        boom: 'coucou'
      }
    }];
  
    expect(fn2(data)).toEqual(expectedResult);
  })
})

describe('edge cases', () => {
  it('get first key from empty object return undefined', () => {
    const [firstKey] = Object.keys({});
    expect(firstKey).toEqual(undefined)
  })
})
