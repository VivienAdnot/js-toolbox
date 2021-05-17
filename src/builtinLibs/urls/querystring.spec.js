// querystring is native in node
const { parse } = require("querystring");

describe("querystring", () => {
  it("parse", () => {
    const query = "__xts__[0]=68.ARBLBFm1rkZ08xSPpLixQ&__tn__=-R";
    const result = parse(query);

    expect(result).toEqual({
      "__xts__[0]": "68.ARBLBFm1rkZ08xSPpLixQ",
      __tn__: "-R"
    });
  });

  it('parse incorrect query string', () => {
    const query = "?????fooooo=bar&&&&&&&&&ii=====toto";
    const result = parse(query);

    expect(result).toEqual({
      "?????fooooo": "bar",
      "ii": "====toto",
    })
  });
});
