const yup = require("yup");

describe("yup", () => {
  describe("integer", () => {
    describe("cast", () => {
      let schema = yup.object().shape({
        id: yup
          .number()
          .integer()
          .required()
      });
      it("success", () => {
        const req = {
          params: {
            id: "2"
          }
        };
        const formattedParams = schema.cast(req.params);
        const { id } = formattedParams;

        return expect(id).toBe(2);
      });

      it("should fail", () => {
        const req = {
          params: {
            id: "A"
          }
        };

        try {
          schema.cast(req.params);
          return expect(1).toBe(2);
        } catch (err) {
          expect(err).toBeDefined();
        }
      });
    });

    describe("> 0", () => {
      let schema = yup.object().shape({
        id: yup
          .number()
          .required()
          .positive()
          .integer()
      });

      describe("validate", () => {
        const validIds = [2];

        validIds.forEach((validId, index) => {
          it("" + index, () => {
            const req = {
              params: {
                id: validId
              }
            };
            return schema.isValid(req.params).then(function(isValid) {
              return expect(isValid).toBe(true);
            });
          });
        });

        describe("not valid", () => {
          const invalidIds = ["A", 1.5, {}, null, undefined, -1, 0];

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

    describe(">= 0", () => {
      let schema = yup.object().shape({
        id: yup
          .number()
          .required()
          .min(0)
          .integer()
      });

      describe("validate", () => {
        const validIds = [2, 0];

        validIds.forEach((validId, index) => {
          it("" + index, () => {
            const req = {
              params: {
                id: validId
              }
            };
            return schema.isValid(req.params).then(function(isValid) {
              return expect(isValid).toBe(true);
            });
          });
        });

        describe("not valid", () => {
          const invalidIds = [-1, null, undefined, "A", {}];

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
});
