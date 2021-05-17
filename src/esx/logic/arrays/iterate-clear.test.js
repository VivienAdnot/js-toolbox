// The purpose of this test is to check whether we can empty an array
// while we are iterating over it

it('array iterate & clear', () => {
  let counter = 0;

  const array = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
  ];

  const reset = () => {
    for (let level = 0; level < array.length; level += 1) {
      array[level] = [];
    }
  };

  for (let level = 0; level < array.length; level++) {
    for (let op = 0; op < array[level].length; op++) {
      console.log({ level, op });

      if (level === 1 && op === 2) {
        console.log('STOP');
        reset();
      } else {
        counter++;
      }
    }
  }

  expect(counter).toEqual(7);
});
