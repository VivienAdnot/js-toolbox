const {MyObject} = require('./source');

console.log(MyObject)

it('default', () => {
  const obj = MyObject();
  const result = obj.foo();
  expect(result).toEqual(30);
})