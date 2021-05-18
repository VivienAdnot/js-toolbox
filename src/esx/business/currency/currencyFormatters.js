const formatMoneyValue = number => {
  const parsed = parseFloat(number);
  if (Number.isNaN(parsed)) {
    return null;
  }
  return parsed.toFixed(2);
};

const roundNumber = (number, decimals) => Math.round(number * 10 ** decimals) / 10 ** decimals;

const formatNumber = (value, digits = undefined, defaultValue = undefined) => {
  if (value === null || value === undefined) return defaultValue;
  
  // eslint-disable-next-line no-param-reassign
  value = Number(value);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(value)) return defaultValue;

  let options = {};
  if (value === 0 || (value >= 1 && digits === 0)) {
    options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  }

  return new Intl.NumberFormat(i18n.locale, options).format(value);
};

// const scientificNumberXXXX = (num, digits) => {
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

const scientificNumber = (num, digits) => {
  if (num === undefined || num === null) return '-';
  // eslint-disable-next-line no-param-reassign
  num = Number(num);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(num)) return '-';
  const si = [
    { minValue: 1, divider: 1, symbol: '' },
    { minValue: 10000, divider: 1000, symbol: 'k' },
    { minValue: 1e6, divider: 1e6, symbol: 'M' },
  ];
  // const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;

  for (i = 0; i < si.length; i++) {
    if (num < si[i].minValue) {
      break;
    }
  }
  if (i > 0) i--;
  const result = (num / si[i].divider).toFixed(digits);
  return new Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: digits }).format(result) + si[i].symbol;
};

module.exports = {
  formatNumber,
  formatMoneyValue,
  roundNumber,
  scientificNumber,
};
