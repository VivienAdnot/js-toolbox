let data = {};

const get = key => {
  return data[key];
};

const set = (key, value) => {
  data[key] = value;
};

const __clearData = () => {
  data = {};
};

module.exports = {
  get,
  set,
  __clearData
};
