const Boom = require("boom");

const run = () => {
  throw Boom.internal("foo");
};

run();
