const cache = require("./cache");

const useCache = () => {
  cache.set({ foo: 'bar' });
  return cache.get("foo");
};

module.exports = useCache;
