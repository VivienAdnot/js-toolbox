class Client {
  constructor() {
    this._config = "foo";
  }
}

const createEsClient = () => {
  let client = new Client();

  return Object.assign(Object.create(client), {
    upsertEntities() {
      return Promise.resolve({
        foo: "bar"
      });
    }
  });
};

module.exports = createEsClient;
