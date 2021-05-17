const isbrowser_1 = require("./isbrowser");
const node_fetch_1 = require("node-fetch");

const fetch = isbrowser_1.isBrowser() ? window.fetch : node_fetch_1.default;

it("fetch ok", () => {
  return fetch("https://github.com/")
    .then(res => res.text())
    .then(body => {
      expect(body.length).toBeDefined();
    });
});
