const yup = require("yup");

describe("yup", () => {
  describe("when", () => {
    let schema = yup.object().shape({
      isBig: yup.boolean(),
      count: yup.number().when("isBig", {
        is: true,
        then: yup.number().min(5),
        otherwise: yup.number().min(0)
      })
    });

    describe("validate", () => {
      it("is valid with isBig = true", () => {
        const obj = {
          isBig: true,
          count: 10
        };

        return schema.isValid(obj).then(function(isValid) {
          return expect(isValid).toBe(true);
        });
      });

      it("is valid with isBig = false", () => {
        const obj = {
          isBig: false,
          count: 2
        };

        return schema.isValid(obj).then(function(isValid) {
          return expect(isValid).toBe(true);
        });
      });
    });
  });
});
