// splice modifies an array. It can:
// - extracts,
// - replaces
// - add elements

describe("array", () => {
  describe("splice", () => {
    describe("extract from array", () => {
      it("extracts the two first items", () => {
        const lines = ["foo", "bar", "baz", "bim"];
        const elements = lines.splice(0, 2);

        expect(lines.length).toBe(2);
        expect(lines).toEqual(["baz", "bim"]);
        expect(elements).toEqual(["foo", "bar"]);
      });
    });

    describe("insert into array", () => {
      it("insert 1 item", () => {
        const lines = ["foo", "bar", "baz", "bim"];
        lines.splice(1, 0, "hello");

        expect(lines.length).toBe(5);
        expect(lines).toEqual(["foo", "hello", "bar", "baz", "bim"]);
      });
    });

    describe("replace array element", () => {
      it("replaces 1 item", () => {
        const lines = ["foo", "bar", "baz", "bim"];
        lines.splice(3, 1, "hello");

        expect(lines.length).toBe(4);
        expect(lines).toEqual(["foo", "bar", "baz", "hello"]);
      });
    });
  });
});
