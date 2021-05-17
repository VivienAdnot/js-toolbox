// merges 2 arrays

it("merges 2 arrays", () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  const arr3 = arr1.concat(arr2);
  expect(arr3).toEqual([1, 2, 3, 4]);
  // original array is unchanged
  expect(arr1).toEqual([1, 2]);
});

it("merges array[integer] and integer", () => {
  const arr1 = [1, 2];
  const item2 = 3;

  expect(arr1.concat(item2)).toEqual([1, 2, 3]);
});

it("merges array[integer] and null", () => {
  const arr1 = [1, 2];
  const item2 = null;

  expect(arr1.concat(item2)).toEqual([1, 2, null]);
});

it("concat 2 array of objects in 1 array", () => {
  // real life example: create ES bulk query
  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/16.x/api-reference.html#api-bulk

  const firstOperation = [{ title: "bar" }, { data: { foo: "bar" } }];
  const secondOperation = [{ title: "baz" }, { data: { foo: "baz" } }];

  const result = firstOperation.concat(secondOperation);

  expect(result).toEqual([
    { title: "bar" },
    { data: { foo: "bar" } },
    { title: "baz" },
    { data: { foo: "baz" } }
  ]);
});
