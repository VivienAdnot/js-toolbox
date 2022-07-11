const cache = require('../__stubs__/cache')
cache.get = () => {
  return 'baz'
}

const useCache = require('../__stubs__/useCache')

describe('jest.fn', () => {
  it('sync mock by default', () => {
    const myMockFn = jest.fn((i) => i+1);

    const result = myMockFn(1);
    expect(result).toEqual(2);
  })

  it('async mock', async () => {
    const myMockFn = jest.fn((i) => new Promise(resolve => resolve(i+1)))

    const result = await myMockFn(1);
    expect(result).toEqual(2);
  })

  it('async mock 2', async () => {
    const myMockFn = jest.fn(() => new Promise(resolve => resolve(['coucou'])))

    const result = await myMockFn();
    expect(result).toEqual(['coucou']);
  })
})

it('mock without require', () => {
  expect(useCache()).toEqual('baz');
})