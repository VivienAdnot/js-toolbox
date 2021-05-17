const { FacebookApiError, GraphMethodException } = require("./customErrors");
const { myFuncWillFail, shouldRetry } = require("./run");

describe("error", () => {
  describe("custom", () => {
    describe("instanceOf", () => {
      it("parent", async () => {
        return myFuncWillFail().catch(err => {
          expect(err).toBeInstanceOf(FacebookApiError);
          return expect(err.message).toEqual("ErrorCode 404: foo");
        });
      });

      it("child", async () => {
        const willFail = async () => {
          throw new GraphMethodException(400, "foo");
        };

        const boomboom = () => {
          return willFail().catch(shouldRetry);
        };

        return boomboom().then(result => {
          return expect(result).toBe(false);
        });
      });
    });

    describe("custom properties", () => {
      it("name", () => {
        return myFuncWillFail().catch(err => {
          return expect(err.name).toEqual("FacebookApiError");
        });
      });
    });
  });
});
