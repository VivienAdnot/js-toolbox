const urlRegex = require('url-regex');

const urlTest = (value) => {
  return /^(?!.*(http(s?):\/\/|\?)).+$/.test(value) && urlRegex({exact: true, strict: false}).test(value);
}

describe('urlTest', () => {
  const tests = [
    { url: 'http://github.com foo bar', expectedResult: false },
    { url: 'titi.f/test', expectedResult: false },
    { url: 'titi.fr/test?haha=abcd', expectedResult: false },
    { url: 'http://titi.fr/test?haha=abcd', expectedResult: false },
    { url: 'https://titi.fr/test?haha=abcd', expectedResult: false },

    { url: 'github.com', expectedResult: true },
    { url: 'pumthaifoodchain.fr/commandez', expectedResult: true },
    { url: 'www.pumthaifoodchain.fr/commandez', expectedResult: true },
    { url: '//www.pumthaifoodchain.fr/commandez', expectedResult: true },
    { url: '//www.pumthaifoodchain.fr/////commandez', expectedResult: true },
    { url: 'titi.fr/test', expectedResult: true },
    { url: 'titi.fr/bobobo/', expectedResult: true },
  ]

  tests.forEach(({ url, expectedResult }) => {
    it(`${url} should be: ${expectedResult}`, () => {
      expect(urlTest(url)).toEqual(expectedResult)
    })
  })
})