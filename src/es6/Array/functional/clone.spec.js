it("clone", () => {
  var arr = [1, 2, 3];
  var arr2 = [...arr];
  arr2.push(4);

  expect(arr2).toEqual([1, 2, 3, 4]);
  expect(arr).toEqual([1, 2, 3]);
});
