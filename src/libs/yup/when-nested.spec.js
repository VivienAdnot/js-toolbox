const yup = require("yup");

describe("yup", () => {
  describe("when", () => {
    let schema = yup
      .object()
      .shape({
        status: yup
          .string()
          .required()
          .oneOf([
            "completed",
            "failed",
            "delayed",
            "active",
            "waiting",
            "paused",
            "stuck",
            "null"
          ]),
        data: yup.object().shape({
          status: yup.string().required(),
          result: yup.mixed().when("status", {
            is: "success",
            then: yup.mixed().required()
          }),
          error: yup.mixed().when("status", {
            is: "failed",
            then: yup.object().required()
          })
        })
      })
      .noUnknown(true)
      .strict()
      .required();

    describe("validate", () => {
      describe("status success", () => {
        it("should be valid", () => {
          const obj = {
            status: "completed",
            data: {
              status: "success",
              result: {
                foo: "bar"
              }
            }
          };

          return schema.isValid(obj).then(function(isValid) {
            return expect(isValid).toBe(true);
          });
        });

        it("should not be valid", () => {
          const obj = {
            status: "completed",
            data: {
              status: "success",
              error: {
                boom: "boomboom"
              }
            }
          };

          return schema.isValid(obj).then(function(isValid) {
            return expect(isValid).toBe(false);
          });
        });
      });
      describe("status failed", () => {
        it("should be valid", () => {
          const obj = {
            status: "completed",
            data: {
              status: "failed",
              error: {
                boom: "boomboom"
              }
            }
          };

          return schema.isValid(obj).then(function(isValid) {
            return expect(isValid).toBe(true);
          });
        });

        it("should not be valid", () => {
          const obj = {
            status: "completed",
            data: {
              status: "failed",
              result: {
                foo: "bar"
              }
            }
          };

          return schema.isValid(obj).then(function(isValid) {
            return expect(isValid).toBe(false);
          });
        });
      });
      describe("status active", () => {
        it("should be valid", () => {
          const obj = {
            status: "active"
          };

          return schema.isValid(obj).then(function(isValid) {
            return expect(isValid).toBe(true);
          });
        });
      });
    });
  });
});
