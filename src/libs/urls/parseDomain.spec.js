const parseDomain = require("parse-domain");

const url =
  "https://www.facebook.com/lemonde.fr/posts/10157863978212590?__tn__=-R";

it("parse-domain", () => {
  const domainInfo = parseDomain(url);

  expect(domainInfo).toEqual({
    tld: "com",
    domain: "facebook",
    subdomain: "www"
  });
});

it('parse domain of an invalid url returns null', () => {
  const invalidUrl = 'coucou';
  expect(parseDomain(invalidUrl)).toBe(null);
})
