const isbrowser_1 = require("./isbrowser");

it("not browser", () => {
  expect(isbrowser_1.isBrowser()).toBe(false);
});
