const users = [
  {
    firstname: 'John',
    lastname: 'Smith',
  },
  {
    firstname: 'Bob',
    lastname: 'Tromp',
  },
];

const compare = (rowA, rowB, field) => {
  if (rowA[field] < rowB[field]) return -1;
  if (rowA[field] > rowB[field]) return 1;
  else return 0;
};

it('real word', () => {
  const sortedUsers = users.sort((a, b) => {
    const res = compare(a, b, 'firstname');
    return res;
  });

  expect(sortedUsers).toEqual([
    {
      firstname: 'Bob',
      lastname: 'Tromp',
    },
    {
      firstname: 'John',
      lastname: 'Smith',
    },
  ]);
});

it('sort string asc', () => {
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

  const result = users.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
  expect(result).toEqual(expectedAscResult);
});
