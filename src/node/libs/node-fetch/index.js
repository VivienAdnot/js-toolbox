const isbrowser_1 = require("./isbrowser");
const node_fetch_1 = require("node-fetch");

console.log(isbrowser_1.isBrowser());

const fetch = isbrowser_1.isBrowser() ? window.fetch : node_fetch_1.default;

module.exports = fetch;
