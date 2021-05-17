// const {
//   formatMoneyValue,
//   roundNumber,
//   scientificNumber,
// } = require('./currencyFormatters');

// describe('formatMoneyValue', () => {
//   it('display float with 2 rounded decimals', () => {
//     const value = 12.78567;
//     expect(formatMoneyValue(value)).toEqual('12.79')
//   })

//   it('no number values return null', () => {
//     const value = 'foo';
//     expect(formatMoneyValue(value)).toEqual(null)
//   })

//   it('negative integer', () => {
//     const value = -1000;
//     expect(formatMoneyValue(value)).toEqual('-1000.00')
//   })
// })

// describe('roundNumber', () => {
//   it('number with 3 rounded decimals', () => {
//     const value = 12.78567;
//     expect(roundNumber(value, 3)).toEqual(12.786)
//   })

//   it('no number values return NaN', () => {
//     const value = 'foo';
//     expect(roundNumber(value, 2)).toEqual(NaN)
//   })

//   it('negative integer', () => {
//     const value = -1000;
//     expect(roundNumber(value, 2)).toEqual(-1000.00)
//   })
// })

// describe('scientificNumber', () => {
//   it('number with 5 rounded decimals', () => {
//     const value = 12.78567436242564332;
//     expect(scientificNumber(value, 4)).toEqual('12.7857')
//   })

//   it('undefined or null num return -', () => {
//     expect(scientificNumber(null, 3)).toEqual('-')
//     expect(scientificNumber(undefined, 3)).toEqual('-')
//   })

//   it('no number values return NaN', () => {
//     const value = 'foo';
//     expect(scientificNumber(value, 2)).toEqual('NaN')
//   })

//   it('integer do not display decimal', () => {
//     const value = 500;
//     expect(scientificNumber(value, 2)).toEqual('500')
//   })

//   it('negative integer display negative sign', () => {
//     const value = -1000;
//     expect(scientificNumber(value, 2)).toEqual('-1000')
//   })

//   describe('exponent value', () => {
//     it('exponent value 3 is replaced by k', () => {
//       const value = 1e3;
//       expect(scientificNumber(value, 2)).toEqual('1k')
//     })

//     // https://coolconversion.com/math/scientific-notation-to-decimal/Convert_1.5e3_to-number
//     it('exponent value 3 with comma is replaced by k', () => {
//       const value = 1.5e3;
//       expect(scientificNumber(value, 2)).toEqual('1.5k')
//     })

//     it('exponent value 6 is replaced by M', () => {
//       const value = 1e6;
//       expect(scientificNumber(value, 2)).toEqual('1M')
//     })
//   })
// })

// describe.only('sci 2', () => {
//   const tests = [
//     { value: 1932, expected: '1,932'},
//     { value: 9999, expected: '9,999'},
//     { value: 10100, expected: '10k'},
//     { value: 102500, expected: '103k'},
//     { value: 1002500, expected: '1M'},
//     { value: 110002500, expected: '110M'},
//     { value: 1100002500, expected: '1,100M'},
//     { value: 12190002500, expected: '12,190M'}
//   ];

//   tests.forEach(({value, expected}) => {
//     it(`${value.toString()} => ${expected}`, () => {
//       expect(scientificNumber(value, 0)).toEqual(expected);
//     })
//   })
// })

test.todo('some test to be written in the future');