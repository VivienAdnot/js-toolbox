const yup = require("yup");

describe("yup", () => {
  describe("array integer", () => {
    let schema = yup.object().shape({
      params: yup.object().shape({
        id: yup
          .number()
          .integer()
          .positive()
          .required()
      }),
      body: yup.object().shape({
        current_steps: yup
          .array()
          .of(
            yup
              .number()
              .integer()
              .positive()
          )
          .min(1)
      })
    });

    it("is valid", () => {
      const req = {
        params: {
          id: 2
        },
        body: {
          current_steps: [1, 2]
        }
      };
      return schema.isValid(req).then(function(isValid) {
        return expect(isValid).toBe(true);
      });
    });

    describe("not valid", () => {
      describe("current_steps array integer", () => {
        const invalidReqs = [[], ["A"], [-1]];

        invalidReqs.forEach((invalidReq, index) => {
          it("" + index, () => {
            const req = {
              params: {
                id: 2
              },
              body: {
                current_steps: invalidReq
              }
            };
            return schema.isValid(req).then(function(isValid) {
              return expect(isValid).toBe(false);
            });
          });
        });
      });
    });

    describe("cast", () => {
      it("success", () => {
        const req = {
          params: {
            id: "2"
          },
          body: {
            current_steps: ["1", "2"]
          }
        };
        const formatted = schema.cast(req);

        expect(formatted.params.id).toBe(2);
        expect(formatted.body.current_steps).toEqual([1, 2]);
      });

      it("success: other data is ignored", () => {
        const req = {
          params: {
            id: "2"
          },
          body: {
            current_steps: ["1", "2"]
          },
          foo: {
            bar: "baz",
            bloom: "ok"
          }
        };
        const formatted = schema.cast(req);

        expect(formatted.params.id).toBe(2);
        expect(formatted.body.current_steps).toEqual([1, 2]);
      });

      it("should fail", () => {
        const req = {
          params: {
            id: "2"
          },
          body: {
            current_steps: ["A", "B"]
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
  });
});
