it("return unique values from Array", () => {
  const data = [1, 2, 2, 2, 3, 4, 2, 3, 1];

  expect([...new Set(data)]).toEqual([1, 2, 3, 4]);
  expect([...new Set(data)].length).toEqual(4);
});
