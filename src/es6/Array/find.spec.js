it('find', () => {
  const object = [
    {
      google: {
        foo: 'bar',
      },
    },
    {
      facebook: {
        foo: 'baz',
      },
    },
  ];

  const found = object.find((o) => Object.keys(o)[0] === 'facebook');
  expect(found['facebook']).toEqual({ foo: 'baz' });
});

it.only('should return key matching criteria', () => {
  const actuals = {
    '-1': 10,
    '-2': 100,
    '-3': undefined
  }

  function isTempId(id) {
    return id in actuals;
  };

  expect(isTempId(-2)).toEqual(true);
  expect(isTempId(100)).toEqual(false);

  function getTemp(actualId) {
    const keys = Object.keys(actuals);
    const tempId = keys.find(key => actuals[key] === actualId);
    return tempId ? parseInt(tempId, 10) : undefined;
  };

  expect(getTemp(100)).toEqual(-2);
  expect(getTemp(1000)).toEqual(undefined);
});