const _ = require('lodash');

describe('lodash.orderBy', () => {
  var users = [
    { user: 'fred', title: 'abcd' },
    { user: 'barney', title: 'mnop' },
    { user: 'ross', title: 'ijkl' },
    { user: 'mike', title: 'efgh' },
  ];

  const expectedDescResult = [
    { user: 'barney', title: 'mnop' },
    { user: 'ross', title: 'ijkl' },
    { user: 'mike', title: 'efgh' },
    { user: 'fred', title: 'abcd' },
  ];

  const expectedAscResult = [
    { user: 'fred', title: 'abcd' },
    { user: 'mike', title: 'efgh' },
    { user: 'ross', title: 'ijkl' },
    { user: 'barney', title: 'mnop' },
  ];

  it('order by desc', () => {
    expect(_.orderBy(users, 'title', 'desc')).toEqual(expectedDescResult);
  });

  it('order by asc', () => {
    expect(_.orderBy(users, 'title', 'asc')).toEqual(expectedAscResult);
  });
});
