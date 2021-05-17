// on utilise le curying pour avoir stocker la fn et les arguments en tant qu'arguments,
// et pouvoir retry la fn avec les arguments
const wrap = () => {
  const executor = fn => (...args) => {
    const retryFn = () => {
      return fn(...args);
    };

    return retryFn();
  };

  return executor;
};

const wrapper = wrap();
const fn = () => Promise.resolve("ok");

it("currying", () => {
  // on passe fn en argument mais on ne l'éxécute pas tout de suite
  return wrapper(fn)().then(result => {
    return expect(result).toBe("ok");
  });
});
