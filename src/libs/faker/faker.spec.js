const faker = require('faker');

describe('generate', () => {
  it('string', () => {
    const str = faker.helpers.repeatString('a', 10);
    expect(str).toEqual('aaaaaaaaaa');
  })
  
  it('string 2', () => {
    const str = faker.helpers.repeatString('title', 4);
    expect(str).toEqual('titletitletitletitle');
  })
  
  it('string 3', () => {
    const str = faker.helpers.repeatString('title 1', 4);
    expect(str).toEqual('title 1title 1title 1title 1');
  })
  
  it.only('random string of 4 characters', () => {
    const str = faker.random.alpha({ count: 4});
    console.log(str);
    expect(str.length).toBe(4);
  })
});