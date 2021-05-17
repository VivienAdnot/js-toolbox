describe('inline snapshot', () => {
  it('basic test', () => {
    const data = [{ value: 10 }, { value: 20 }, { value: 30 }];

    const result = data.map(({ value }) => ({ value: value * 20 }));

    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "value": 200,
        },
        Object {
          "value": 400,
        },
        Object {
          "value": 600,
        },
      ]
    `);
  });
});
