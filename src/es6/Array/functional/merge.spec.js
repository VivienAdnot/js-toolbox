it("basic merge with spread ok", () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  const result = [...arr1, ...arr2];

  expect(result).toEqual([1, 2, 3, 4]);
});

it("nested arrays merge with spread ok", () => {
  const array1 = [
    {
      data: {
        foo: {
          bar: {
            baz: {
              foo: {
                bar: {
                  baz: 10
                }
              }
            }
          }
        }
      }
    }
  ];

  const array2 = [
    {
      data: {
        foo: {
          bar: {
            baz: {
              foo: {
                bar: {
                  baz: 20
                }
              }
            }
          }
        }
      }
    }
  ];

  const result = [...array1, ...array2];

  expect(result).toEqual([
    {
      data: {
        foo: {
          bar: {
            baz: {
              foo: {
                bar: {
                  baz: 10
                }
              }
            }
          }
        }
      }
    },
    {
      data: {
        foo: {
          bar: {
            baz: {
              foo: {
                bar: {
                  baz: 20
                }
              }
            }
          }
        }
      }
    }
  ]);
});
