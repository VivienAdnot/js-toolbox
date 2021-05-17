describe("integer as argument is passed at value, not reference", () => {
  const createLoop = (counter, limit = 3) => {
    const loop = () => {
      // console.log("count it", counter);
      if (counter >= limit) return Promise.resolve();
      counter++;
      return loop();
    };

    return loop;
  };

  it("internal counter is increased, but external counter remains 0 (because value passing vs reference passing)", () => {
    const count = 0;
    const looper = createLoop(count);
    return looper().then(() => {
      return expect(count).toBe(0);
    });
  });
});
