const _ = require('lodash');

const payload = {
  foo: {
    advertiser_id: 'baz',
  },
  boom: {
    vivien: {
      adset_id: 'bazob',
      stomper: 'loco',
      audrey: {
        boom_id: 'boom',
        bar_id: 'boomboom',
      },
    },
  },
  bazob: {
    advertiser_id: 'boom',
  },
};

const isKeyAnId = (key) => key.match(/id$/);

const resolveId = (object) => {
  for (const key of Object.keys(object)) {
    let value = object[key];

    if (_.isObject(value)) resolveId(value);
    else if (isKeyAnId(key)) object[key] = 'foo';
  }
};

it('recursive', () => {
  resolveId(payload);

  expect(payload).toEqual({
    foo: {
      advertiser_id: 'foo',
    },
    boom: {
      vivien: {
        adset_id: 'foo',
        stomper: 'loco',
        audrey: {
          boom_id: 'foo',
          bar_id: 'foo',
        },
      },
    },
    bazob: {
      advertiser_id: 'foo',
    },
  });
});
