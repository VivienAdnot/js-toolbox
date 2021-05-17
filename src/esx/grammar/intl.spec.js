// function formatForBudget(value, digits = undefined) {
//   if (value == null) {
//     return undefined; 
//   }
//   if (value < 0) {
//     console.error(`negative amount for money: ${value}`);
//     value = 0; 
//   }
//   return new Intl.NumberFormat(/*this.$i18n.locale*/ 'fr', { style: 'currency', currency: 'EUR', minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
// };

// const scientificNumber = (num, digits) => {
//   if (num === undefined || num === null) return '-';
//   const si = [
//     { value: 1, symbol: '' },
//     { value: 1e3, symbol: 'k' },
//     { value: 1e6, symbol: 'M' },
//     { value: 1e9, symbol: 'G' },
//     { value: 1e12, symbol: 'T' },
//     { value: 1e15, symbol: 'P' },
//     { value: 1e18, symbol: 'E' },
//   ];
//   const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
//   let i;
//   for (i = si.length - 1; i > 0; i -= 1) {
//     if (num >= si[i].value) {
//       break;
//     }
//   }
//   return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
// };

// function formatNumber(value, digits = undefined) {
//   if (value == null) {
//     return undefined; 
//   }
//   if (value < 0) {
//     console.error(`negative amount for money: ${value}`);
//     value = 0; 
//   }
//   return new Intl.NumberFormat('fr', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
// }

// // with option style
// const formatMoney2 = (value, formatOptions = {}) => {
//   const { withoutDecimals = false, defaultValue = undefined } = formatOptions;
//   let options = {
//     style: 'currency',
//     currency: 'EUR',
//   }

//   if (value === null || value === undefined) return defaultValue;
  
//   // TODO: delete later: Temporary test in pre-prod env
//   if (value < 0) {
//     console.error(`negative amount for money: ${value}`);
//     value = 0; // eslint-disable-line no-param-reassign
//   }

//   const optionsWithoutDecimals = { minimumFractionDigits: 0, maximumFractionDigits: 0 };

//   if (value === 0 || (value >= 1 && withoutDecimals)) {
//     options = Object.assign(optionsWithoutDecimals, options);
//   }

//   return new Intl.NumberFormat('fr', options).format(value);
// };

// // with default parameter style
// const formatMoney3 = (value, withoutDecimals = false, defaultValue = undefined) => {
//   let options = {
//     style: 'currency',
//     currency: 'EUR',
//   }

//   if (value === null || value === undefined) return defaultValue;
  
//   // TODO: delete later: Temporary test in pre-prod env
//   if (value < 0) {
//     console.error(`negative amount for money: ${value}`);
//     value = 0; // eslint-disable-line no-param-reassign
//   }

//   const optionsWithoutDecimals = { minimumFractionDigits: 0, maximumFractionDigits: 0 };

//   if (value === 0 || (value >= 1 && withoutDecimals)) {
//     options = Object.assign(optionsWithoutDecimals, options);
//   }

//   return new Intl.NumberFormat('fr', options).format(value);
// };

// const formatMoney4 = (value, digits = undefined, defaultValue = undefined) => {
//   let options = {
//     style: 'currency',
//     currency: 'EUR',
//   }

//   if (value === null || value === undefined) return defaultValue;
  
//   // TODO: delete later: Temporary test in pre-prod env
//   if (value < 0) {
//     console.error(`negative amount for money: ${value}`);
//     value = 0; // eslint-disable-line no-param-reassign
//   }

//   const optionsWithoutDecimals = { minimumFractionDigits: 0, maximumFractionDigits: 0 };

//   if (value === 0 || (value >= 1 && digits === 0)) {
//     options = Object.assign(optionsWithoutDecimals, options);
//   }

//   return new Intl.NumberFormat('fr', options).format(value);
// };

// const formatNumber2 = (value, digits = undefined, defaultValue = undefined) => {
//   if (value === null || value === undefined) return defaultValue;
//   const optionsWithoutDecimals = { minimumFractionDigits: 0, maximumFractionDigits: 0 };

//   let options = {};
//   if (value === 0 || (value >= 1 && digits === 0)) {
//     options = Object.assign(optionsWithoutDecimals, options);
//   }

//   return new Intl.NumberFormat('en', options).format(value);
// };

// describe('formatNumber2', () => {
//   it('0 => 0', () => {
//     expect(formatNumber2(0)).toEqual('0');
//   })

//   it('<1 => virgule', () => {
//     expect(formatNumber2(0.95)).toEqual('0.95');
//   })

//   it('>= 1 => default avec virgule', () => {
//     expect(formatNumber2(1500)).toEqual('1,500');
//   })

//   it('>= 1 => default avec virgule', () => {
//     expect(formatNumber2(1500.28)).toEqual('1,500.28');
//   })

//   it('>= 1 => sans virgule', () => {
//     expect(formatNumber2(1500.28, 0)).toEqual('1,500');
//     expect(formatNumber2(1500.88, 0)).toEqual('1,501');
//   })
// });

// describe.only('formatMoney2', () => {
//   it('< 0 => 0', () => {
//     expect(formatMoney2(-100.50)).toEqual('€0');
//     expect(formatMoney3(-100.50)).toEqual('€0');
//     expect(formatMoney4(-100.50)).toEqual('€0');
//   })

//   it('0 => 0', () => {
//     expect(formatMoney2(0)).toEqual('€0');
//     expect(formatMoney3(0)).toEqual('€0');
//     expect(formatMoney4(0)).toEqual('€0');
//   })

//   it('<1 => virgule', () => {
//     expect(formatMoney2(0.95)).toEqual('€0.95');
//     expect(formatMoney3(0.95)).toEqual('€0.95');
//     expect(formatMoney4(0.95)).toEqual('€0.95');
//   })

//   it('>= 1 => default avec virgule', () => {
//     expect(formatMoney2(1500)).toEqual('€1,500.00');
//     expect(formatMoney3(1500)).toEqual('€1,500.00');
//     expect(formatMoney4(1500)).toEqual('€1,500.00');
//   })

//   it('>= 1 => sans virgule', () => {
//     expect(formatMoney2(1500, { withoutDecimals: true })).toEqual('€1,500');
//     expect(formatMoney3(1500, true)).toEqual('€1,500');
//     expect(formatMoney4(1500, 0)).toEqual('€1,500');
//   })
// });

// it('formatNumber', () => {
//   expect(formatNumber(95000.25)).toEqual('95,000.25');
// });

// it('formatBudget unlimited decimals', () => {
//   const value = 95000.25;
//   const result = formatForBudget(value);
//   expect(result).toEqual('€95,000.25')
// })

// it('formatBudget 0', () => {
//   const value = 0;
//   const result = formatForBudget(value);
//   expect(result).toEqual('0')
// })

// it('formatBudget no decimals', () => {
//   const value = 95000.25;
//   const result = formatForBudget(value, 0);
//   expect(result).toEqual('€95,000')
// })

// describe('i18n', () => {
//   describe('currency', () => {
//     it('currency EUR and locale EN should format number with comma and €', () => {
//       const value = 95000.25;
//       const result = new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' }).format(value);
//       expect(result).toEqual('€95,000.25')
//     })

//     it('currency EUR and locale FR should format number with comma and €', () => {
//       const value = 95000.25;
//       const result = new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(value);
//       expect(result).toEqual('€95,000.25')
//     })

//     it('currency EUR and locale FR should format number without digits', () => {
//       const value = 95000.25;
//       const result = new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
//       expect(result).toEqual('€95,000')
//     })

//     it('currency EUR and locale FR should format number without digits', () => {
//       const value = 95000.25;
//       const result = new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR', minimumFractionDigits: undefined, maximumFractionDigits: undefined }).format(value);
//       expect(result).toEqual('€95,000.25')
//     })
//   })
// })

test.todo('some test to be written in the future');