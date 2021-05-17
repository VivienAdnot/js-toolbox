const createFn = () => {
  const internal = {
    fetchAccount: () => Promise.resolve({ foo: "baz" })
  };

  return { internal };
};

module.exports = createFn;
