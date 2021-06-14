// sort by is equivalent of order by asc
const _ = require('lodash');

describe('lodash.take', () => {
  var users = [
    { user: 'fred', title: 'abcd' },
    { user: 'barney', title: 'mnop' },
    { user: 'ross', title: 'ijkl' },
    { user: 'mike', title: 'efgh' },
  ];

  const expectedAscResult = [
    { user: 'fred', title: 'abcd' },
    { user: 'barney', title: 'mnop' },
  ];

  it('take should select the firsts 2 elements', () => {
    const result = _.take(users, 2);
    expect(result).toEqual(expectedAscResult);
  });

  it('take should select the firsts 2 elements', () => {
    const result = _.take(users, 2).map(user => user.title);
    expect(result).toEqual(['abcd', 'mnop']);
  });
});
