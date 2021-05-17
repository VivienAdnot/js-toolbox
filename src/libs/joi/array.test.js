const Joi = require("joi");
const Promise = require("bluebird");

const validate = Promise.promisify(Joi.validate).bind(Joi);

const messageOK = [
  {
    feeds: {
      "0177874b-8998-4996-8f13-8b90c74745d5": Date.now()
    }
  }
];

const messageNOOK = [
  {
    coucou: {
      "0177874b-8998-4996-8f13-8b90c74745d5": Date.now()
    }
  }
];

const schema = Joi.array().items(
  Joi.object({
    feeds: Joi.object()
  })
);

it("should work", () => {
  return validate(messageOK, schema).then(result =>
    expect(result).toEqual(messageOK)
  );
});

it("should fail", () => {
  return validate(messageNOOK, schema).catch(err => expect(err).toBeDefined());
});
