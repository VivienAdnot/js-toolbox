const yup = require("yup");

describe("yup", () => {
  describe("string", () => {
    let schema = yup
      .object()
      .shape({
        id: yup.string().required()
      })
      .strict();

    describe("validate", () => {
      it("is valid", () => {
        const req = {
          params: {
            id: "A"
          }
        };
        return schema.isValid(req.params).then(function(isValid) {
          return expect(isValid).toBe(true);
        });
      });

      describe("not valid", () => {
        const invalidIds = ["", 1.5, null, undefined, {}, { foo: "bar" }];

        invalidIds.forEach((invalidId, index) => {
          it("" + index, () => {
            const req = {
              params: {
                id: invalidId
              }
            };
            return schema.isValid(req.params).then(function(isValid) {
              return expect(isValid).toBe(false);
            });
          });
        });
      });
    });
  });
});
