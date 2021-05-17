/**
 * Returns the substring at the specified location within a String object.
 * @param start The zero-based index number indicating the beginning of the substring.
 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
 * If end is omitted, the characters from start through the end of the original string are returned.
 */

describe("substring", () => {
  it("remove first character", () => {
    const str = "boom";
    const chunk = str.substring(1);

    expect(chunk).toEqual("oom");
    // original string is unchanged
    expect(str).toEqual("boom");
  });

  it("remove all but first character", () => {
    const str = "boom";
    const chunk = str.substring(0, 1);

    expect(chunk).toEqual("b");
    expect(str).toEqual("boom");
  });

  it("returns string without last character", () => {
    const str = "boom";
    const chunk = str.substring(0, str.length - 1);

    expect(chunk).toEqual("boo");
    expect(str).toEqual("boom");
  });

  it("returns last character of string", () => {
    const str = "boom";
    const chunk = str.substring(str.length, str.length - 1);

    expect(chunk).toEqual("m");
    expect(str).toEqual("boom");
  });

  it("returns 3 last characters of string", () => {
    const str = "Request failed with status code 404";
    const chunk = str.substring(str.length, str.length - 3);

    expect(chunk).toEqual("404");
  });
});
