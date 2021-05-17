const { parse } = require("url");

describe("url", () => {
  it("parse ok", () => {
    const url =
      "https://www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R";

    const parsedUrl = parse(url);
    expect(parsedUrl).toEqual({
      auth: null,
      hash: null,
      host: "www.facebook.com",
      hostname: "www.facebook.com",
      href:
        "https://www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R",
      path: "/lemonde.fr/posts/10157863978212590?__tn__=-R",
      pathname: "/lemonde.fr/posts/10157863978212590",
      port: null,
      protocol: "https:",
      query: "__tn__=-R",
      search: "?__tn__=-R",
      slashes: true
    });
  });

  it("parse invalid url ok", () => {
    const url = "http://test.com??????fooooo=bar&&&&&&&&&ii=====toto";

    const parsedUrl = parse(url);
    console.log(parsedUrl);

    expect(parsedUrl).toEqual({
      protocol: 'http:',
      slashes: true,
      auth: null,
      host: 'test.com',
      port: null,
      hostname: 'test.com',
      hash: null,
      search: '??????fooooo=bar&&&&&&&&&ii=====toto',
      query: '?????fooooo=bar&&&&&&&&&ii=====toto',
      pathname: '/',
      path: '/??????fooooo=bar&&&&&&&&&ii=====toto',
      href: 'http://test.com/??????fooooo=bar&&&&&&&&&ii=====toto'
    })
  });

  it("tests minesweeper", () => {
    const url = "http://minesweeper.api.p.vivienadnot.com/api/best-scores";
    const parsedUrl = parse(url);

    expect(parsedUrl).toMatchObject({
      host: "minesweeper.api.p.vivienadnot.com"
    });
  });

  describe("edge cases", () => {
    it("fails if https is missing", () => {
      const url =
        "www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R";

      const parsedUrl = parse(url);

      expect(parsedUrl).toEqual({
        auth: null,
        hash: null,
        host: null,
        hostname: null,
        href: "www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R",
        pathname: "www.facebook.com/lemonde.fr/posts/10157863978212590",
        path: "www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R",
        port: null,
        protocol: null,
        query: "__tn__=-R",
        search: "?__tn__=-R",
        slashes: null
      });
    });

    it("fails if https is missing", () => {
      const url =
        "https://://facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R";

      const parsedUrl = parse(url);

      expect(parsedUrl).toEqual({
        protocol: "https:",
        slashes: true,
        auth: null,
        host: "",
        port: null,
        hostname: "",
        hash: null,
        search: "?__tn__=-R",
        query: "__tn__=-R",
        pathname: "//facebook.com/lemonde.fr/posts/10157863978212590",
        path: "//facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R",
        href:
          "https:////facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R"
      });
    });
  });
});
