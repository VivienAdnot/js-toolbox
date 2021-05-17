const defaultHooks = require("./defaultHooks");

const createHooks = () => {
  const preNormalize = () => {
    console.log("foo");
  };

  return {
    ...defaultHooks,
    preNormalize
  };
};

module.exports = createHooks;
