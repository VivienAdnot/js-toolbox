
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

it('should loop over keys', () => {
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