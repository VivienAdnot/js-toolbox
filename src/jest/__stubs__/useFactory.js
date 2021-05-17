const createFn = require("./factory");

const fn = async (useClient = true) => {
  const client = createFn();
  console.log(client);

  if (useClient) {
    return client.internal.fetchAccount();
  }

  return { foo: "bar" };
};

module.exports = fn;

// const createFn = () => {
//   const internal = {
//     fetchAccount: () => Promise.resolve({ foo: "baz" })
//   };

//   return { internal };
// };

// module.exports = createFn;
