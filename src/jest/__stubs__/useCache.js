const cache = require("./cache");

const fn = () => {
  return cache.get("foo");
};

module.exports = fn;
