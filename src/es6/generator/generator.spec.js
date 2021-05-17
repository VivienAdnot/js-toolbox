const ping = async () => "ok";

function* generator() {
  const isAlive = yield ping();
  return !!isAlive;
}

it("", () => {
  const iterator = generator();
  const iteration = iterator.next();

  expect(iteration).toMatchObject({ done: false });

  iteration.value.then(({ data }) => {
    const nextIteration = iterator.next(data);
    expect(nextIteration).toEqual({ value: false, done: true });
  });
});
