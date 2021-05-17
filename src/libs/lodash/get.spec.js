
const _ = require('lodash');

describe('lodash', () => {
  describe('get', () => {
    describe('expected value is found in target object', () => {
      describe('object', () => {
        const object = {
          foo: {
            bar: 'baz',
          },
        };
        it('use 1 string with dot', () => {
          const res = _.get(object, ['foo', 'bar'], null);
          expect(res).toBe('baz');
        });

        it('use array of string', () => {
          const res = _.get(object, 'foo.bar', null);
          expect(res).toBe('baz');
        });

        it('use string with bracket', () => {
          const res = _.get(object, 'foo[bar]', null);
          expect(res).toBe('baz');
        });

        it('dynamic property name', () => {
          const v = {
            $params: {
              toto: {
                value: 'foo'
              }
            }
          };

          const name = 'toto';

          const result = _.get(v, `$params[${name}].value`);
          expect(result).toEqual('foo');
        })
      });

      describe('array', () => {
        it('should find data', () => {
          const array = [{ id: 1 }, { id: 2 }];

          const result = _.get(array, '[1].id', 'foo');
          expect(result).toBe(2);
        });

        it('real usecase', () => {
          const schedule = {
            periods: [
              {
                startDateTime: 'foo',
                endDateTime: 'bar',
              },
            ],
          };

          expect(_.get(schedule, 'periods[0]')).toEqual({
            startDateTime: 'foo',
            endDateTime: 'bar',
          });
        });

        it('real usecase 2', () => {
          const adMessages = [{
            headlines: [{
              foo: 'bar'
            }]
          }]

          expect(_.get(adMessages, '[0].headlines[0].foo')).toEqual('bar');
        });

        it('should not find data', () => {
          const array = [{ id: 1 }, { id: 2 }];

          const result = _.get(array, '[3].id', 'foo');
          expect(result).toBe('foo');
        });
      });

      describe('falsy expected values do not return default value', () => {
        // usecase is_complete: actor.is_complete || null,
        // here, if actor.is_complete is false, we want the result to be false
        const getIsComplete = (actor) => _.get(actor, 'is_complete', null);

        it('result should be true', () => {
          const actor = { is_complete: true };
          const result = getIsComplete(actor);
          expect(result).toBe(true);
        });

        it('result should be false', () => {
          const actor = { is_complete: false };
          const result = getIsComplete(actor);
          expect(result).toBe(false);
        });

        it('result should be null', () => {
          const actor = { is_complete: undefined };
          const result = getIsComplete(actor);
          expect(result).toBe(null);
        });
      });
    });

    describe('returns default value', () => {
      it('returns null', () => {
        const error = null;
        const res = _.get(error, ['response', 'data'], null);
        expect(res).toBe(null);
      });

      it('returns null', () => {
        const error = null;
        const res = _.get(error, 'response', null);
        expect(res).toBe(null);
      });

      it('returns null', () => {
        const task = null;
        const res = _.get(task, 'status', null) || _.get(task, ['body', 'status'], null);
        expect(res).toBe(null);
      });

      describe('real world cases', () => {
        it('||', () => {
          const obj = {};
  
          const result =  _.get(obj, 'googleChannel.budget.currency')
            || _.get(obj, 'campaignObject.budget.currency')
            || _.get(obj, 'googleAdsParameters.default.currency_code')
            || 'EUR';

          expect(result).toEqual('EUR');
        });

        it('||', () => {
          const obj = {
            googleAdsParameters: {
              default: {
                currency_code: 'GBP'
              }
            }
          };
  
          const result =  _.get(obj, 'googleChannel.budget.currency')
            || _.get(obj, 'campaignObject.budget.currency')
            || _.get(obj, 'googleAdsParameters.default.currency_code')
            || 'EUR';

          expect(result).toEqual('GBP');
        })
      });

      describe('edge cases', () => {
        it('null does not send to default value', () => {
          const foo = { field: null };
          const result = _.get(foo, 'field', 0);
          expect(result).toBe(null);
        });
      });
    });
  });
});
