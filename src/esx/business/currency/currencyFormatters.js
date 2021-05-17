const formatMoneyValue = number => {
  const parsed = parseFloat(number);
  if (Number.isNaN(parsed)) {
    return null;
  }
  return parsed.toFixed(2);
};

const roundNumber = (number, decimals) => Math.round(number * 10 ** decimals) / 10 ** decimals;

const scientificNumberXXXX = (num, digits) => {
  if (num === undefined || num === null) return '-';
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i -= 1) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

const scientificNumber = (num, digits, minExponent, maxExponent) => {
  if (num === undefined || num === null) return '-';
  const si = [
    { minValue: 1, divider: 1, symbol: '' },
    { minValue: 10000, divider: 1000, symbol: 'k' },
    { minValue: 1e6, divider: 1e6, symbol: 'M' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = 0; i < si.length; i++) {
    if (num < si[i].minValue) {
      break;
    }
  }
  i--;
  const result = (num / si[i].divider).toFixed(digits).replace(rx, '$1');
  return new Intl.NumberFormat('fr').format(result) + si[i].symbol;
};

module.exports = {
  formatMoneyValue,
  roundNumber,
  scientificNumber,
};
