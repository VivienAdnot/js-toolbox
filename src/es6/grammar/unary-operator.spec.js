it('should cast Date to number, and return timestamp', () => {
  const date = new Date();
  const timestamp = date.getTime();
  expect(+date).toEqual(Number(date));

  expect(timestamp).toEqual(+date);
})

it('should cast string to number', () => {
  const result = +'100';
  expect(result).toBe(100);
})

it('should cast boolean to number', () => {
  expect(+true).toBe(1);
  expect(+false).toBe(0);
})

it('edge fail cast', () => {
  expect(+'a').toBe(NaN);
  expect(+{}).toBe(NaN);
  expect(+[]).toBe(0);
  expect(+null).toBe(0);
  expect(+undefined).toBe(NaN);
})