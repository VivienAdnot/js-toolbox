const structureCommon = require('./structureCommon');

it('generates ok', () => {
  const struct = structureCommon({ name: 'foo', objective: 'REACH' });
  expect(struct).toMatchSnapshot();
});
