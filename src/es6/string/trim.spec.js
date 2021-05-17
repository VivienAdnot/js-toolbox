describe("string", () => {
  it("trim", () => {
    const url = " https://instagram.com/p/B2BipB3lDNG";
    expect(url.trim()).toEqual("https://instagram.com/p/B2BipB3lDNG");
  });
  it("1", () => {
    var url = "https://www.facebook.com/pg/lemonde.fr/";
    var urlBase = "https://www.facebook.com/";
    var parts = url
      .replace(urlBase, "")
      .trim()
      .split("/");
    return expect(parts).toEqual(["pg", "lemonde.fr", ""]);
  });

  it("1", () => {
    var url = "https://www.facebook.com/pg/lemonde.fr/";
    var urlBase = "https://www.facebook.com/";
    var parts = url
      .replace(urlBase, "")
      .trim()
      .split("/")
      .filter(v => v);
    return expect(parts).toEqual(["pg", "lemonde.fr"]);
  });
});
