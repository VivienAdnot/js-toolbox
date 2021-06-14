const Factory = require('./operations.stamp');

const run = () => {
  const factoryInstance = Factory();
  factoryInstance.run();
  return factoryInstance;
}

it('foo', () => {
  const instance1 = run();
  expect(instance1.operations[0].length).toBe(0);
  expect(instance1.operations[1].length).toBe(0);
})
