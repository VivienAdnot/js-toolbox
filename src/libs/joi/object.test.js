const Joi = require("joi");
const Promise = require("bluebird");

const validate = Promise.promisify(Joi.validate).bind(Joi);

const messageOK1 = {
  type: "foo"
};

const messageOK2 = {
  type: "foo",
  payload: {
    _feed: "0ca62cd0-c5f2-4fd6-ba24-ee2232546a8e",
    _user: "27169112-c348-42f1-94e5-52fcbaabe50d"
  }
};

const messageNOOK1 = {
  coucou: "hello"
};

const messageNOOK2 = {
  coucou: "hello",
  payload: {
    _feed: "1234"
  }
};

const schema = Joi.object({
  type: Joi.string().required(),
  payload: Joi.object({
    _feed: Joi.string()
      .guid()
      .required(),
    _user: Joi.string()
      .guid()
      .required()
  })
});

describe("should work", () => {
  it("1", () => {
    return validate(messageOK1, schema).then(result =>
      expect(result).toEqual(messageOK1)
    );
  });

  it("2", () => {
    return validate(messageOK2, schema).then(result =>
      expect(result).toEqual(messageOK2)
    );
  });
});

describe("should fail", () => {
  it("1", () => {
    return validate(messageNOOK1, schema).catch(err =>
      expect(err).toBeDefined()
    );
  });

  it("2", () => {
    return validate(messageNOOK2, schema).catch(err =>
      expect(err).toBeDefined()
    );
  });
});
