// sort by is equivalent of order by asc
const _ = require('lodash');

describe('lodash.sortBy', () => {
  var users = [
    { user: 'fred', title: 'abcd' },
    { user: 'barney', title: 'mnop' },
    { user: 'ross', title: 'ijkl' },
    { user: 'mike', title: 'efgh' },
  ];

  const expectedAscResult = [
    { user: 'fred', title: 'abcd' },
    { user: 'mike', title: 'efgh' },
    { user: 'ross', title: 'ijkl' },
    { user: 'barney', title: 'mnop' },
  ];

  it('sort by', () => {
    expect(_.sortBy(users, 'title')).toEqual(expectedAscResult);
  });
});
