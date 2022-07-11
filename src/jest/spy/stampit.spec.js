const SomeStamp = require('../__stubs__/someStamp');

let spy;
let instance;
describe('spy basic test', () => {
  beforeAll(() => {
    instance = SomeStamp();
    spy = jest.spyOn(instance, 'm');
  });

  it('spy', async () => {
    instance.m('foo');
    expect(spy).toHaveBeenCalledWith('foo');
  });
});
